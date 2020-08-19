import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { IdGenerator } from "./services/IdGenerator";
import { UserDatabase } from "./data/UserDatabase";
import { Authenticator } from "./services/Authenticator";
import HashManager from "./services/HashManager";
import { Hash } from "crypto";

dotenv.config();

const app = express();

app.use(express.json());

app.post("/signup", async (req: Request, res: Response) => {
  try {
    // Item b. Validação do email
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    // Item c. Validação da senha
    if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Invalid password");
    }

    if (!req.body.role) {
      throw new Error("Invalid role");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    };

    const hashManager = new HashManager();
    const hashPassword = await hashManager.hash(userData.password);

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    const userDb = new UserDatabase();
    await userDb.createUser(id, userData.email, hashPassword, userData.role);

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      id,
      role: userData.role,
    });

    res.status(200).send({
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

app.post("/login", async (req: Request, res: Response) => {
  try {
    // Item b. Validação do email
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const userDatabase = new UserDatabase();
    const user = await userDatabase.getUserByEmail(userData.email);

    const hashManager = new HashManager();
    const hashCompare = await hashManager.compare(
      userData.password,
      user.password
    );

    if (!hashCompare) {
      throw new Error("Invalid password");
    }

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      id: user.id,
      role: user.role,
    });

    res.status(200).send({
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

app.get("/user/profile", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

    const authenticator = new Authenticator();
    const authenticationData = authenticator.getData(token);

    const userDb = new UserDatabase();
    const user = await userDb.getUserById(authenticationData.id);

    if (authenticationData.role !== "ADMIN") {
      throw new Error("Não autorizado");
    }

    res.status(200).send({
      id: user.id,
      email: user.email,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

app.delete("/user/:id", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

    const authenticator = new Authenticator();
    const authenticationData = authenticator.getData(token);
    console.log(authenticationData);
    const userDb = new UserDatabase();

    if (authenticationData.role !== "ADMIN") {
      throw new Error("Não autorizado");
    }

    await userDb.deleteUser(req.params.id);

    res.status(200).send({ message: "Usuário deletado" });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

app.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

    const authenticator = new Authenticator();
    authenticator.getData(token);
    // a gente PRECISA verificar se o token não está expirado

    const id = req.params.id;

    const userDatabase = new UserDatabase();
    const user = await userDatabase.getUserById(id);

    res.status(200).send({
      id: user.id,
      email: user.email,
      role: user.role,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
