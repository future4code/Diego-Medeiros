import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export class UserBusiness {
  public async createUser(user: {
    email: string;
    name: string;
    password: string;
    role: string;
  }) {
    const idGenerator = new IdGenerator();
    const hashManager = new HashManager();
    const userDatabase = new UserDatabase();
    const authenticator = new Authenticator();

    try {
      if (!user.name || !user.email || !user.password || !user.role) {
        throw new Error("Please fill all the fields");
      }

      if (user.email.indexOf("@") === -1) {
        throw new Error("Invalid Email");
      }

      if (user.password.length < 6) {
        throw new Error("Password must have at least 6 characters");
      }

      const id = idGenerator.generate();
      const hashPassword = await hashManager.hash(user.password);
      await userDatabase.createuser(
        id,
        user.name,
        user.email,
        hashPassword,
        user.role
      );
      const token = authenticator.generateToken({ id, role: user.role });

      return token;
    } catch (error) {
      throw new Error(
        error.message ||
          "Error creating user. Please check your system administrator."
      );
    }
  }

  public async getUserByEmail(user: {
    email: string;
    password: string;
  }): Promise<any> {
    const userDatabase = new UserDatabase();
    const userFromDB = await userDatabase.getUserByEmail(user.email);
    console.log(userFromDB);
    const hashManager = new HashManager();
    const hashCompare = await hashManager.compare(
      user.password,
      userFromDB.password
    );

    const authenticator = new Authenticator();
    const accessToken = authenticator.generateToken({
      id: userFromDB.id,
      role: userFromDB.role,
    });

    const dataUser = {
      accessToken: accessToken,
      role: userFromDB.role,
    };

    if (!hashCompare) {
      throw new Error("Invalid Password!");
    }
    return dataUser;
  }

  public async getAllUsers(token: string) {
    const userDatabase = new UserDatabase();
    const authenticator = new Authenticator();

    authenticator.getData(token);
    return await userDatabase.getAllUsers();
  }

  public async deleteUser(input: { id: string; token: string }) {
    const userDatabase = new UserDatabase();
    const authenticator = new Authenticator();

    const authenticationData = authenticator.getData(input.token);

    console.log(authenticationData);

    if (authenticationData.role !== "ADMIN") {
      throw new Error("Apenas administradores podem deletar um usuário");
    }

    return await userDatabase.deleteUser(input.id);
  }
}
