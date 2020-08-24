### Exercicio 1

a)O salt adiciona uma string aleatória de 22 caracteres na senha antes de criar o hash, dessa forma evitando ataques rainbow table. O round é o cost ( custo numerio ) que está relacionado a aumentar a segurança da senha, quanto maior o cost maior o tempo de execução do algoritmo, assim dificuldando ataques. O custo de 12 é um padrão usado na maioria das libs, então vamos utilizar esse valor.

b) e c)

```
import * as bcrypt from "bcryptjs";

export default class HashManager {
  async hash(text: string): Promise<string> {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(rounds);
    const cypherText = await bcrypt.hash(text, salt);

    return cypherText;
  }

  async compare(text: string, cypherText: string): Promise<boolean> {
    const result = await bcrypt.compare(text, cypherText);
    return result;
  }
}
```

### Exercicio 2

a) O cadastro, para que a senha já vá para o banco "criptografada".

b)

```
...

const hashManager = new HashManager();
    const hashPassword = await hashManager.hash(userData.password);

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    const userDb = new UserDatabase();
    await userDb.createUser(id, userData.email, hashPassword);

...
```

c)

```
...

const hashManager = new HashManager();
    const hashCompare = await hashManager.compare(
      userData.password,
      user.password
    );

    if (!hashCompare) {
      throw new Error("Invalid password");
    }
...

```

d)Não, pois verifica a autorização do usuário via o token já gerado anteriormente.

### Exercicio 3

a)

```

ALTER TABLE User ADD role VARCHAR(255) NOT NULL DEFAULT "normal";
```

b) Feito
c) Feito
d) Feito

### Exercicio 4

a)

```
const token = req.headers.authorization as string;

    const authenticator = new Authenticator();
    const authenticationData = authenticator.getData(token);

    const userDb = new UserDatabase();
    const user = await userDb.getUserById(authenticationData.id);

    if (authenticationData.role !== "NORMAL") {
      throw new Error("Não autorizado");
    }
```

### Exercicio 5

```
 public async deleteUser(id: string): Promise<void> {
    await this.connection.delete().from(UserDatabase.TABLE_NAME).where({ id });
  }
}

################################################

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
```

### Exercicio 6

```
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
```

### Exercicio 7

a)

```
import knex from "knex";
import Knex from "knex";

export abstract class BaseDataBase {
  private static connection: Knex | null = null;

  protected getConnection(): Knex {
    if (BaseDataBase.connection === null) {
      BaseDataBase.connection = knex({
        client: "mysql",
        connection: {
          host: process.env.DB_HOST,
          port: 3306,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_DATABASE_NAME,
        },
      });
    }
    return BaseDataBase.connection;
  }

  public static async destroyConnection(): Promise<void> {
    if (BaseDataBase.connection) {
      await BaseDataBase.connection.destroy();
      BaseDataBase.connection = null;
    }
  }
}
```

A alteração na classe é a retirada do bloco das configurações de conexão e a chamada da função getConnection() quando necessário.

b) Exemplo:

```
await BaseDataBase.destroyConnection();
No fim do endpoint
```
