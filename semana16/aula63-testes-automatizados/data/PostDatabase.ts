import { BaseDatabase } from "./BaseDatabase";
import { Post, PostType } from "../model/Post";

export class PostDatabase extends BaseDatabase {
  private static TABLE_NAME = "Posts";

  public async createPost(
    id: string,
    image: string,
    description: string,
    type: string,
    creationDate: string,
    userId: string
  ): Promise<void> {
    try {
      await this.getConnection()
        .insert({
          id,
          photo_url: image,
          description,
          created_at: creationDate,
          type,
          creator: userId,
        })
        .into(PostDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getPostById(id: string): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from(PostDatabase.TABLE_NAME)
      .where({ id });

    return result[0];
  }

  public async deletePostById(id: string): Promise<any> {
    await this.getConnection()
      .del()
      .from(PostDatabase.TABLE_NAME)
      .where({ id });
  }
}
