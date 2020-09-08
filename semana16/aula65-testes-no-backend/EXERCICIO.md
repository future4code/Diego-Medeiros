### Exercicio 1

a)

```
public async getUserById(id: string) {
    const user = await this.userDatabase.getUserById(id);

    if (!user) {
      throw new NotFoundError("User not found");
    }

    return {
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      role: user.getRole(),
    };
  }
```

### Exercicio 2

a)

```
test("Erro de usuário não existente.", async () => {
    expect.assertions(2);
    try {
      const getUserById = jest.fn();
      userDatabase = { getUserById };

      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      );

      await userBusiness.getUserById("invalid-id");
    } catch (error) {
      expect(error.errorCode).toBe(404);
      expect(error.message).toBe("User not found");
    }
  });
```

b)

```
test("Resposta de sucesso.", async () => {
    const getUserById = jest.fn(
      (id: string) =>
        new User(
          "id",
          "Astrodev",
          "astrodev@gmail.com",
          "hash",
          stringToUserRole("ADMIN")
        )
    );
    userDatabase = { getUserById };

    const userBusiness = new UserBusiness(
      userDatabase as any,
      hashGenerator as any,
      tokenGenerator as any,
      idGenerator as any
    );

    const user = await userBusiness.getUserById("id");

    expect(getUserById).toHaveBeenCalledWith("id");
    expect(user).toEqual({
      id: "id",
      name: "Astrodev",
      email: "astrodev@gmail.com",
      role: UserRole.ADMIN,
    });
  });
```

### Exercicio 3

a)

```
public async getAllUsers(role: UserRole) {
    if (stringToUserRole(role) !== UserRole.ADMIN) {
      throw new UnauthorizedError(
        "You must be an admin to access this endpoint"
      );
    }
    const users = await this.userDatabase.getAllUsers();

    return users.map((user) => ({
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      role: user.getRole(),
    }));
  }
```

### Exercicio 4

a)

```
 test("Erro de  não autorizado", async () => {
    expect.assertions(2);
    try {
      const userBusiness = new UserBusiness(
        userDatabase as any,
        hashGenerator as any,
        tokenGenerator as any,
        idGenerator as any
      );

      await userBusiness.getAllUsers(UserRole.NORMAL);
    } catch (error) {
      expect(error.errorCode).toBe(403);
      expect(error.message).toBe(
        "You must be an admin to access this endpoint"
      );
    }
  });
```

b)

```
test("Resposta de sucesso", async () => {
    expect.assertions(2);

    const getAllUsers = jest.fn(() => [
      new User(
        "id",
        "Astrodev",
        "astrodev@gmail.com",
        "hash",
        stringToUserRole("ADMIN")
      ),
    ]);
    userDatabase = { getAllUsers };

    const userBusiness = new UserBusiness(
      userDatabase as any,
      hashGenerator as any,
      tokenGenerator as any,
      idGenerator as any
    );

    const result = await userBusiness.getAllUsers(UserRole.ADMIN);

    expect(getAllUsers).toHaveBeenCalledTimes(1);
    expect(result).toContainEqual({
      id: "id",
      name: "Astrodev",
      email: "astrodev@gmail.com",
      role: UserRole.ADMIN,
    });
  });
```

5.  a)

```
public async getProfile(id: string) {
    const user = await this.userDatabase.getUserById(id);

    if (!user) {
      throw new NotFoundError("User not found");
    }

    return {
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      role: user.getRole(),
    };
  }
```
