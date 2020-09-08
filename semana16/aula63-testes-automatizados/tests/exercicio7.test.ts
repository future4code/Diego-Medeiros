import { PostDatabase } from "../data/PostDatabase";
import { BaseDatabase } from "../data/BaseDatabase";
import dotenv from "dotenv";

dotenv.config();

describe("Testes do banco de dados de Posts", () => {
  const postDataBase = new PostDatabase();

  afterAll(async () => {
    await postDataBase.deletePostById("011");
    await BaseDatabase.destroyConnection();
  });

  test("Teste de criação de um usuário duplicado", async () => {
    expect.assertions(2);
    try {
      const post = {
        id: "011",
        image: "www.azeroth.com",
        description: "Teste do erro do POST",
        creation_date: "2020-09-01",
        type: "Evento",
        user_id: "08ac41b5-06ac-4073-8bc6-b9cd2e0c18a8",
      };

      await postDataBase.createPost(
        post.id,
        post.image,
        post.description,
        post.type,
        post.creation_date,
        post.user_id
      );

      await postDataBase.createPost(
        post.id,
        post.image,
        post.description,
        post.type,
        post.creation_date,
        post.user_id
      );
    } catch (error) {
      expect(error).not.toBe(undefined);
      expect(error.message).toBe("Duplicate entry '011' for key 'PRIMARY'");
    }
  });
});
