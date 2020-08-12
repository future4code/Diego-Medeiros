### Exercício 1

a) Remove a coluna salary
b) Renomeia a coluna e renova suas definições
c) Renova a definição da coluna
d)

```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

### Exercício 2

a)

```
UPDATE Actor SET name = "Chuck Norris", birth_date = "1940-03-10" WHERE id = 003;
UPDATE Actor SET gender = "male" WHERE id = 003
```

b)

```
UPDATE Actor SET name = "Juliana Pães" WHERE id = 005;
UPDATE Actor SET name = "Juliana Paes" WHERE id = 005;
```

c)

```
UPDATE Actor SET name = "Arnold Schwarzenegger", salary = "500000", birth_date = "1947-07-30", gender = "male" WHERE id = 005;
```

d) Tentando alterar uma coluna existente com ID inexistente não dá erro e diz que nenhuma linha foi alterada. Tentando alterar uma coluna inexistente ai sim dá erro, diz "unknown column".

### Exercício 3

a)

```
DELETE FROM Actor WHERE name = "Chuck Norris";
```

b)

```
DELETE FROM Actor WHERE salary > 1000000 AND gender = "male";
```

### Exercício 4

a)

```
SELECT MAX(salary) FROM Actor;
```

b)

```
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```

c)

```
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```

d)

```
SELECT SUM(salary) FROM Actor;
```

### Exercício 5

a) Fez uma contagem de cada genero e apresentou pra nós. Agrupa dados em relação a outros campos da tabela.
b)

```
SELECT name, id FROM Actor ORDER BY name DESC;
```

c)

```
SELECT * FROM Actor ORDER BY salary ASC;
```

d)

```
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
```

e)

```
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;
```

### Exercício 6

a)

```
ALTER TABLE Movie ADD limit_date DATE;
```

b)

```
ALTER TABLE Movie CHANGE rating rating FLOAT;
```

c)

```
UPDATE Movie SET limit_date = "2020-09-18" WHERE id = 001;
UPDATE Movie SET limit_date = "2020-07-18" WHERE id = 002;
```

d) Ele não acha nenhuma linha pra alterar e retorna um OK dizendo nenhuma linha alterada.

### Exercício 7

a)

```
SELECT COUNT(*) FROM Movie WHERE rating > 7.5;
```

b)

```
SELECT AVG(rating) FROM Movie;
```

c)

```
SELECT COUNT(*) FROM Movie WHERE limit_date > CURDATE();
```

d)

```
SELECT COUNT(*) FROM Movie WHERE release_date > CURDATE();
```

e)

```
SELECT MAX(rating) FROM Movie;
```

f)

```
SELECT MIN(rating) FROM Movie;
```

### Exercício 8

a)

```
SELECT * FROM Movie ORDER BY title ASC;
```

b)

```
SELECT * FROM Movie ORDER BY title DESC LIMIT 5;
```

c)

```
SELECT * FROM Movie WHERE release_date < CURDATE() ORDER BY limit_date DESC LIMIT 3;
```

d)

```
SELECT * FROM Movie ORDER BY rating DESC LIMIT 3;
```
