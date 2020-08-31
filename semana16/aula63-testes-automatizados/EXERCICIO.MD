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
