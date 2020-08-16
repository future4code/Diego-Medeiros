### Exercicio 1

a) É a chave que cria o vinculo entra duas tabelas.

b) Modelo de criação e inserção

```
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

SELECT * FROM Rating;

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
		"001",
    "Muito bom!",
    7,
		"002"
);
```

c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`mello_diego_medeiros`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

Não pode criar uma linha filha pois o ID de referencia não existe.

d)

```
ALTER TABLE Movie DROP COLUMN rating;
```

e) Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`mello_diego_medeiros`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

Não pode apagar uma informação que tem vinculo com outra tabela. Esse vinculo é formado pela FOREIGN KEY.

### Exercicio 2

a) Possui duas colunas contendo movie_id que tem como referencia o ID dos filmes da tabela de filmes e o actor_id que tem como referencia o ID dos atores da tabela de atores.

b)Modelo de criação

```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"002",
    "005"
);
```

c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`mello_diego_medeiros`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

Não encontra o ID de referencia do Ator.

d) Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`mello_diego_medeiros`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

Não pode apagar o ator que tem vinculo com outra tabela. Esse vinculo é formado pela FOREIGN KEY.

### Exercicio 3

a) ON define que as linhas apresentadas são as que tem o ID da tabela Movie igual ao movie_id da rabela Rating, funciona como uma condição. O JOIN junta as informações de duas tabelas.
b)

```
SELECT m.title, m.id , r.rate FROM Movie m
INNER JOIN Rating r  ON m.id = r.movie_id;
```

### Exercicio 4

a)

```
SELECT Movie.title, Movie.id, Rating.rate, Rating.comment FROM Movie LEFT JOIN Rating ON Movie.id = Rating.movie_id;
```

b)

```
SELECT Movie.id as movie_id, Movie.title, MovieCast.actor_id FROM Movie RIGHT JOIN MovieCast ON Movie.id = MovieCast.movie_id;
```

c)

```
SELECT AVG(Rating.rate), Movie.id, Movie.title FROM Movie
LEFT JOIN Rating  ON Movie.id = Rating.movie_id
GROUP BY (Movie.id);
```

### Exercicio 5

a)Busca todas informações da tabela Movie e combina com as informações da tabela MovieCast , combinando com a tabela Actor e mostrando as informações somente quando o Actor.id for igual a MovieCast.id. Para juntarmos as informações de mais de duas tabelas. A Movie tem relação com a MovieCast, a Actor tem relação com a MovieCast, enfim a MovieCast serve como uma ponte pras duas tabelas.

b)

```
SELECT m.id as id_filme, m.title as titulo_filme, a.id as id_ator, a.name as nome_ator FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

c) Me retornou apenas as informações que defini no SELECT substituindo o nome original para um de mais facil entedimento.

### Exercicio 6

a) M:N Porque um filme pode ganhar varios oscars e um oscar pode pertencer a varios filmes.

b)

```
CREATE TABLE Oscar (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL
);


CREATE TABLE MovieOscar (
		movie_id VARCHAR(255),
		oscar_id VARCHAR(255),
        oscar_date DATE NOT NULL,
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (oscar_id) REFERENCES Oscar(id)
);
```

c)

```
Inserção dos Oscars na tabela
INSERT INTO Oscar (id, title)
VALUES(
  "001",
  "Oscar Melhor Filme"
), (
  "002",
  "Oscar Melhor Figurino"
), (
  "003",
  "Oscar Melhor Musica"
), (
  "004",
  "Oscar Melhores Efeitos"
);

Modelo de inserção dos oscars para os filmes
INSERT INTO MovieOscar(movie_id, oscar_id, oscar_date)
VALUES(
	"004",
    "002",
    "2000-04-18"
);
```

d)

```
SELECT Movie.title as nome_filme, MovieOscar.oscar_date as oscar_data, Oscar.title as nome_oscar FROM Movie
LEFT JOIN MovieOscar ON Movie.id = MovieOscar.movie_id
JOIN Oscar ON MovieOscar.oscar_id = Oscar.id;
```
