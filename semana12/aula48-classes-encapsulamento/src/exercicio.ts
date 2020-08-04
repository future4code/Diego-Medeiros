class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  //private transactions: Transaction[];

  constructor(cpf: string, name: string, age: number) {
    console.log("Chamando o construtor da classe UserAccount");
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }

  public getBalance(): number {
    return this.balance;
    //Aqui deve ser inserida a lógica de pegar saldo do usuário
  }

  public addBalance(value: number): void {
    //Aqui deve ser inserida a lógica de adicionar saldo
    console.log("Saldo atualizado com sucesso");
  }
}

const account: UserAccount = new UserAccount("111.111.111-20", "Gandalf", 2000);

console.log("Instancia", account);

//1 - É uma função que vai receber valores e e setar os valores das propriedades da classe.
//2 - Foi chamada uma vez.
//3 - Atrave´s de métodos públicos, Getters e Setters
//4 - Sim
console.log("Saldo", account.getBalance());
