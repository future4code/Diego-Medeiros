import { User, performPurchase } from "../src/Exercicio1";

describe("Testes da função do Exercicio1", () => {
  test("Usuário com o saldo maior do que o valor de compra", () => {
    const user: User = {
      name: "Astrodev",
      balance: 100,
    };

    const result = performPurchase(user, 50);

    expect(result).toEqual({
      ...user,
      balance: 50,
    });
  });

  test("Usuário com o saldo igual ao valor da compra", () => {
    const user: User = {
      name: "Astrodev",
      balance: 100,
    };

    const result = performPurchase(user, 100);

    expect(result).toEqual({
      ...user,
      balance: 0,
    });
  });

  test("Usuário com o saldo menor que o valor da compra", () => {
    const user: User = {
      name: "Astrodev",
      balance: 50,
    };

    const result = performPurchase(user, 100);

    expect(result).toEqual(undefined);
  });
});
