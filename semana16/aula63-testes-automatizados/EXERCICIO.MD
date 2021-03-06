### Exercicio 1

a)

```
interface User {
	name: string
	balance: number
}
```

b)

```
function performPurchase(user: User, value: number): User | undefined {
	if(user.balance >= value) {
		return {
			...user,
			balance: user.balance - value
		}
	}
	return undefined
}
```

### Exercicio 2

a)

```
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
```

b)

```
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
```

c)

```
test("Usuário com o saldo menor que o valor da compra", () => {
  const user: User = {
    name: "Astrodev",
    balance: 50,
  };

  const result = performPurchase(user, 100);

  expect(result).toEqual(undefined);
});
```

### Exercicio 3

a) Feito.

b)

```
export function verifyAge(casino: Casino, users: User[]): Result {
  const allowed: User[] = [];
  const unallowed: User[] = [];

  for (const user of users) {
    if (casino.location === LOCATION.EUA) {
      if (user.age >= 21) {
        allowed.push(user);
      } else {
        unallowed.push(user);
      }
    } else if (casino.location === LOCATION.BRAZIL) {
      if (user.age >= 18) {
        allowed.push(user);
      } else {
        unallowed.push(user);
      }
      break;
    }
  }

  return {
    brazilians: {
      allowed: allowed
        .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
        .map((u) => u.name),
      unallowed: unallowed
        .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
        .map((u) => u.name),
    },
    americans: {
      allowed: allowed
        .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
        .map((u) => u.name),
      unallowed: unallowed
        .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
        .map((u) => u.name),
    },
  };
}
```

c) Implementar a função.

### Exercicio 4

a)

```
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

    expect(result.brazilians.allowed).toEqual(["Saruman"]);
  });
```

b)

```
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

  expect(result.americans.allowed).toEqual(["Gandalf"]);
});
```

c)

```
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

  expect(result).toEqual({
    brazilians: { allowed: [], unallowed: ["Saruman", "Gandalf"] },
    americans: { allowed: [], unallowed: ["Frodo", "Aragorn"] },
  });
});
```

d)

```
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

  expect(result).toEqual({
    brazilians: { allowed: [], unallowed: ["Saruman", "Gandalf"] },
    americans: { allowed: ["Frodo", "Aragorn"], unallowed: [] },
  });
});
```

### Exercicio 5

a)

```
expect(result.brazilians.allowed.length).toBeGreaterThan(0);
expect(result.brazilians.allowed.length).toBeLessThan(2);
```

b)

```
expect(result.americans.unallowed.length).toBe(0);
```

c)

```
expect(result.brazilians.unallowed).toContain("Saruman");
expect(result.americans.unallowed).toContain("Aragorn");
```

d)

```
expect(result.brazilians.unallowed.length).toBeGreaterThan(1);
expect(result.americans.unallowed.length).toBeLessThan(1);
expect(result.americans.allowed.length).toBe(2);
```

### Exercicio 6

a)

```
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
```

b) Limpar o que foi criado no banco. Destruir a conexão.

```
afterAll(async () => {
    await postDataBase.deletePostById("008");
    await BaseDatabase.destroyConnection();
  });
```

### Exercicio 7

a)

```
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

```
