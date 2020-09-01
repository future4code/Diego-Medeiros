import {
  User,
  Casino,
  NACIONALITY,
  LOCATION,
  verifyAge,
} from "../src/Exercicio3";

describe("Testes da função do Exercicio3", () => {
  test("Usuário brasileiro que possa entrar no Brasil", () => {
    const user: User = {
      name: "Saruman",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const casino: Casino = {
      name: "Taverna",
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [user]);
    console.log(result);

    expect(result.brazilians.allowed.length).toBeGreaterThan(0);
    expect(result.brazilians.allowed.length).toBeLessThan(2);
  });

  test("Usuário americano que possa entrar no Brasil", () => {
    const user: User = {
      name: "Gandalf",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Taverna",
      location: LOCATION.BRAZIL,
    };

    const result = verifyAge(casino, [user]);
    console.log(result);

    expect(result.americans.unallowed.length).toBe(0);
  });

  test("Dois brasileiros e dois americanos que querem entrar nos EUA", () => {
    const user1: User = {
      name: "Saruman",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const user2: User = {
      name: "Gandalf",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const user3: User = {
      name: "Frodo",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const user4: User = {
      name: "Aragorn",
      age: 19,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Taverna_Americana",
      location: LOCATION.EUA,
    };

    const result = verifyAge(casino, [user1, user2, user3, user4]);
    console.log(result);

    expect(result.brazilians.unallowed).toContain("Saruman");
    expect(result.americans.unallowed).toContain("Aragorn");
  });

  test("Dois brasileiros e dois americanos (com idades diferentes) que queiram entrar nos EUA", () => {
    const user1: User = {
      name: "Saruman",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const user2: User = {
      name: "Gandalf",
      age: 19,
      nacionality: NACIONALITY.BRAZILIAN,
    };

    const user3: User = {
      name: "Frodo",
      age: 21,
      nacionality: NACIONALITY.AMERICAN,
    };

    const user4: User = {
      name: "Aragorn",
      age: 21,
      nacionality: NACIONALITY.AMERICAN,
    };

    const casino: Casino = {
      name: "Taverna_Americana",
      location: LOCATION.EUA,
    };

    const result = verifyAge(casino, [user1, user2, user3, user4]);
    console.log(result);

    expect(result.brazilians.unallowed.length).toBeGreaterThan(1);
    expect(result.americans.unallowed.length).toBeLessThan(1);
    expect(result.americans.allowed.length).toBe(2);
  });
});
