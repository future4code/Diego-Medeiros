### Exercicio 1

a)

```
export interface Character {
  name: string;
  life: number;
  strength: number;
  defense: number;
}
```

b)

```
export const validateCharacter = (input: Character): boolean => {
  if (
    !input.name ||
		input.life === undefined ||
		// não pode colocar !input.life porque a vida pode ser 0!
		// o mesmo vale para strength e defense
    input.strength === undefined ||
    input.defense === undefined
  ) {
    return false;
  }

  if (input.life <=0 || input.strength <=0 || input.defense <=0) {
    return false;
  }

  return true;
};
```

### Exercicio 2

Letra a, b, c, d, e, f, g

```
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
     life: 0,
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
     strength: 0,
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
     defense: 0,
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
```

### Exercicio 3

a)

```
export const performAttack = (attacker: Character, defender: Character) => {
if (!validateCharacter(attacker) || !validateCharacter(defender)) {
  throw new Error("Invalid character");
}

if (attacker.strength > defender.defense) {
  defender.life -= attacker.strength - defender.defense;
}
};
```

b)

```
export const performAttack = ( attacker: Character, defender: Character, validator: (input: Character) => boolean ) => {
  if (!validator(attacker) || !validator(defender)) {
    throw new Error("Invalid character");
  }

  if (attacker.strength > defender.defense) {
    defender.life -= attacker.strength - defender.defense;
  }
}
```

c) Na primeira implementação uma função chama a outra, na segunda implementação uma função irá receber a outra como argumento, tornando-a uma função "única".

### Exercicio 4

a) Vamos criar testes unitários da performAttack , pois a inversão de dependencia da validateCharacter já ta aplicada na performAttack.

b)

```
test("Mock de sucesso", () => {
    const mockA = jest.fn(() => {
      return true;
    });
  });
```

c)

```
test("Mock de falha", () => {
    const mockA = jest.fn(() => {
      return false;
    });
  });
```

### Exercicio 5

a)

```
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
```

b)

```
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
```
