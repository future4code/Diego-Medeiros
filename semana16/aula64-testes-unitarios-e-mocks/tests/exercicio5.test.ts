import { Character } from "../src/Exercicio1";
import { performAttack } from "../src/Exercicio3";

describe("Testes do exercicio 5", () => {
  test("Teste de ataque válido", () => {
    const validator = jest.fn(() => {
      return true;
    });

    const character1: Character = {
      name: "Vegeta",
      life: 2000,
      strength: 2000,
      defense: 2000,
    };

    const character2: Character = {
      name: "Freeza",
      life: 1500,
      strength: 1000,
      defense: 1800,
    };

    performAttack(character1, character2, validator as any);

    expect(character2.life).toBe(1300);
    expect(validator).toHaveBeenCalled();
    expect(validator).toHaveBeenCalledTimes(2);
    expect(validator).toHaveReturnedTimes(2);
  });

  test("Teste de personagem inválido", () => {
    expect.assertions(4);
    const validator = jest.fn(() => {
      return false;
    });

    const character1: Character = {
      name: "Vegeta",
      life: 2000,
      strength: 2000,
      defense: 2000,
    };

    const character2: Character = {
      name: "Freeza",
      life: 1500,
      strength: 1000,
      defense: 1800,
    };

    try {
      performAttack(character1, character2, validator as any);
    } catch (error) {
      expect(error.message).toBe("Invalid character");
      expect(validator).toHaveBeenCalled();
      expect(validator).toHaveBeenCalledTimes(1);
      expect(validator).toHaveReturnedTimes(1);
    }
  });
});
