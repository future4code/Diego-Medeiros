describe("Criação de Mocks", () => {
  test("Mock de sucesso", () => {
    const mockA = jest.fn(() => {
      return true;
    });
  });

  test("Mock de falha", () => {
    const mockB = jest.fn(() => {
      return false;
    });
  });
});
