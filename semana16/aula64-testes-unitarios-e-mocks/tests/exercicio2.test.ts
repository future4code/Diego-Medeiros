import { Character, validateCharacter } from "../src/Exercicio1";

describe("Testes do exercicio 2", () => {
  test("Teste que verifica um personagem com nome vazio", async () => {
    const character1: Character = {
      name: "",
      life: 1000,
      strength: 200,
      defense: 100,
    };

    const result = validateCharacter(character1);

    expect(result).toBe(false);
  });

  test("Teste que verifica um personagem com vida vazia", async () => {
    const character1: Character = {
      name: "Vegeta",
      life: undefined,
      strength: 200,
      defense: 100,
    };

    const result = validateCharacter(character1);

    expect(result).toBe(false);
  });

  test("Teste que verifica um personagem com a força vazia", async () => {
    const character1: Character = {
      name: "Vegeta",
      life: 1000,
      strength: undefined,
      defense: 100,
    };

    const result = validateCharacter(character1);

    expect(result).toBe(false);
  });

  test("Teste que verifica um personagem com a defesa vazia", async () => {
    const character1: Character = {
      name: "Vegeta",
      life: 1000,
      strength: 200,
      defense: undefined,
    };

    const result = validateCharacter(character1);

    expect(result).toBe(false);
  });

  test("Teste que verifica um personagem com a defesa negativa", async () => {
    const character1: Character = {
      name: "Vegeta",
      life: 1000,
      strength: 200,
      defense: -10,
    };

    const result = validateCharacter(character1);

    expect(result).toBe(false);
  });

  //Com o valor 0 retorna false, o teste não passa
  test("Teste que verifica um personagem com a força valendo 0", async () => {
    const character1: Character = {
      name: "Vegeta",
      life: 1000,
      strength: 0,
      defense: 100,
    };

    const result = validateCharacter(character1);

    expect(result).toBe(true);
  });

  test("Teste que verifica um personagem com todos valores válidos", async () => {
    const character1: Character = {
      name: "Vegeta",
      life: 1000,
      strength: 200,
      defense: 100,
    };

    const result = validateCharacter(character1);

    expect(result).toBe(true);
  });
});
