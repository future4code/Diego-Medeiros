import knex from "knex";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import moment from "moment";
moment.locale("pt-br");
/**************************************************************/

dotenv.config();

/**************************************************************/

const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});

/**************************************************************/

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

/**************************************************************/

const createNewUser = async (
  id: string,
  name: string,
  nickName: string,
  email: string
): Promise<void> => {
  try {
    await connection.raw(`
      INSERT INTO TodoListUser VALUES
        (
          "${id}",
          "${name}",
          "${nickName}",
          "${email}"
        );
    `);
    console.log("Sucesso");
  } catch (error) {
    console.log(error);
  }
};

app.put("/user", async (req: Request, res: Response) => {
  try {
    if (
      req.body.name === undefined ||
      req.body.nickName === undefined ||
      req.body.email === undefined
    ) {
      return res.status(400).send({ message: "Campos inválidos" });
    } else if (
      req.body.name === "" ||
      req.body.nickName === "" ||
      req.body.email === ""
    ) {
      return res.status(400).send({ message: "Campos inválidos" });
    } else {
      const userData = {
        generateId(): string {
          return Date.now() + Math.random().toString();
        },
        name: req.body.name,
        nickName: req.body.nickName,
        email: req.body.email,
      };

      await createNewUser(
        userData.generateId(),
        userData.name,
        userData.nickName,
        userData.email
      );

      res.status(200).send({ message: "Usuário criado com sucesso!" });
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

const getUser = async (id: string): Promise<any> => {
  try {
    const result = await connection.raw(
      `SELECT id, nickname FROM TodoListUser WHERE id = ${id};`
    );

    console.log(result[0]);
    return result[0];
  } catch (error) {
    console.log(error);
  }
};

app.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const user = await getUser(req.params.id);
    return res.status(200).send(user);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

const updateUser = async (
  name: string,
  nickname: string,
  id: string
): Promise<void> => {
  try {
    const result = await connection.raw(`
      UPDATE TodoListUser SET name = "${name}", nickname = "${nickname}" WHERE id = ${id}
    `);
    console.log("Usuário alterado com sucesso");
  } catch (error) {
    console.log(error);
  }
};

app.post("/user/edit/:id", async (req: Request, res: Response) => {
  try {
    const userData = {
      name: req.body.name,
      nickName: req.body.nickName,
    };

    await updateUser(userData.name, userData.nickName, req.params.id);

    res.status(200).send({ message: "Usuário alterado com sucesso!" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

const createNewTask = async (
  id: string,
  title: string,
  description: string,
  limitDate: any,
  creatorUserId: string
): Promise<void> => {
  try {
    await connection.raw(`
      INSERT INTO TodoListTask VALUES
        ( "${id}",
          "${title}",
          "${description}",
          "to_do",
          "${limitDate}",
          "${creatorUserId}"
        );
    `);
    console.log("Sucesso");
  } catch (error) {
    console.log(error);
  }
};

app.put("/task", async (req: Request, res: Response) => {
  try {
    if (
      req.body.title === undefined ||
      req.body.description === undefined ||
      req.body.limitDate === undefined ||
      req.body.creatorUserId === undefined
    ) {
      return res.status(400).send({ message: "Campos inválidos" });
    } else if (
      req.body.title === "" ||
      req.body.description === "" ||
      req.body.limitDate === "" ||
      req.body.creatorUserId === ""
    ) {
      return res.status(400).send({ message: "Campos inválidos" });
    } else {
      const taskData = {
        generateId(): string {
          return Date.now() + Math.random().toString();
        },
        title: req.body.title,
        description: req.body.description,
        limitDate: req.body.limitDate,
        creatorUserId: req.body.creatorUserId,
      };

      await createNewTask(
        taskData.generateId(),
        taskData.title,
        taskData.description,
        taskData.limitDate,
        taskData.creatorUserId
      );

      res.status(200).send({ message: "Tarefa criada com sucesso!" });
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

const getTask = async (id: string): Promise<any> => {
  try {
    const result = await connection.raw(
      `SELECT TodoListTask.*, TodoListUser.nickname as creatorUserNickName FROM TodoListTask JOIN TodoListUser ON  TodoListTask.creator_user_id = TodoListUser.id WHERE TodoListTask.id = ${id};;`
    );

    console.log(result[0]);
    return result[0];
  } catch (error) {
    console.log(error);
  }
};

app.get("/task/:id", async (req: Request, res: Response) => {
  try {
    const task = await getTask(req.params.id);
    return res.status(200).send(task);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});
