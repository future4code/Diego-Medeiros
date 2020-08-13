### Exercicio 1

a) Devolve diretamente toda a resposta do banco.

b)

```
const searchActor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
  `)
  return result
}
```

c)

```
const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
  `);
	// Só colocamos esse "as count" como apelido, para ficar mais fácil de pegar
	// o valor no resultado!
  const count = result[0][0].count;
  return count;
};
```

### Exercicio 2

a)

```
const updateActor = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};
```

b)

```
const deleteActor = async (id: string): Promise<any> => {
  await connection("Actor").delete().where("id", id);
};
```

c)

```
const avgSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({ gender });

  return result[0].average;
};
```

### Exercicio 3

a) O req possui inormações que chegam no Backend através de requisições, nesse caso usamos o params que recebe o "id" como parametro.

b) Enviam o Status do resultado da requisição (código http que indica sucesso ou erro) e a as informações solicitadas no caso de sucesso, no caso de erro envia o código do erro + mensagem do erro.

c)

```
app.get("/actor", async (req: Request, res: Response) => {
  try {
    const count = await countActors(req.query.gender as string);
    res.status(200).send({
      quantity: count,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```

### Exercicio 4
