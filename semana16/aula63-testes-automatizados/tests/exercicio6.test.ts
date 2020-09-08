import dotenv from "dotenv";
import { PostDatabase } from "../data/PostDatabase";
import { BaseDatabase } from "../data/BaseDatabase";

dotenv.config();

describe("Testes do banco de dados de Posts", () => {
  const postDataBase = new PostDatabase();

  afterAll(async () => {
    await postDataBase.deletePostById("008");
    await BaseDatabase.destroyConnection();
  });

  test("Teste criação de um post", async () => {
    expect.assertions(2);

    const post = {
      id: "008",
      image: "www.google.com",
      description: "Teste do POST",
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
    const postFromDb = await postDataBase.getPostById(post.id);

    expect(postFromDb).toMatchObject({
      id: "008",
      photo_url: "www.google.com",
      description: "Teste do POST",
    });

    expect(postFromDb).not.toBe(undefined);
  });
});
