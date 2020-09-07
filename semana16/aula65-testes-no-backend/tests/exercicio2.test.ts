import { UserBusiness } from "../src/business/UserBusiness";
import { User, stringToUserRole, UserRole } from "../src/model/User";

describe("Testes do exercicio 2", () => {
  let userDatabase = {};
  let hashGenerator = {};
  let tokenGenerator = {};
  let idGenerator = {};

  test("Erro de usuário não existente.", async () => {
    expect.assertions(2);
    try {
      const getUserById = jest.fn();
      userDatabase = { getUserById };

      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      );

      await userBusiness.getUserById("invalid-id");
    } catch (error) {
      expect(error.errorCode).toBe(404);
      expect(error.message).toBe("User not found");
    }
  });

  test("Resposta de sucesso.", async () => {
    const getUserById = jest.fn(
      (id: string) =>
        new User(
          "id",
          "Astrodev",
          "astrodev@gmail.com",
          "hash",
          stringToUserRole("ADMIN")
        )
    );
    userDatabase = { getUserById };

    const userBusiness = new UserBusiness(
      userDatabase as any,
      hashGenerator as any,
      tokenGenerator as any,
      idGenerator as any
    );

    const user = await userBusiness.getUserById("id");

    expect(getUserById).toHaveBeenCalledWith("id");
    expect(user).toEqual({
      id: "id",
      name: "Astrodev",
      email: "astrodev@gmail.com",
      role: UserRole.ADMIN,
    });
  });
});
