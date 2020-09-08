import { UserBusiness } from "../src/business/UserBusiness";
import { UserRole, User, stringToUserRole } from "../src/model/User";

describe("Testes do exercicio 4", () => {
  let userDatabase = {};
  let hashGenerator = {};
  let tokenGenerator = {};
  let idGenerator = {};

  test("Erro de  não autorizado", async () => {
    expect.assertions(2);
    try {
      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      );

      await userBusiness.getAllUsers(UserRole.NORMAL);
    } catch (error) {
      expect(error.errorCode).toBe(403);
      expect(error.message).toBe(
        "You must be an admin to access this endpoint"
      );
    }
  });

  test("Resposta de sucesso", async () => {
    expect.assertions(2);

    const getAllUsers = jest.fn(() => [
      new User(
        "id",
        "Astrodev",
        "astrodev@gmail.com",
        "hash",
        stringToUserRole("ADMIN")
      ),
    ]);
    userDatabase = { getAllUsers };

    const userBusiness = new UserBusiness(
      userDatabase as any,
      hashGenerator as any,
      tokenGenerator as any,
      idGenerator as any
    );

    const result = await userBusiness.getAllUsers(UserRole.ADMIN);

    expect(getAllUsers).toHaveBeenCalledTimes(1);
    expect(result).toContainEqual({
      id: "id",
      name: "Astrodev",
      email: "astrodev@gmail.com",
      role: UserRole.ADMIN,
    });
  });
});
