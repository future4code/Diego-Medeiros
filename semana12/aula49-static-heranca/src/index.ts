import { Customer } from "./customer";
import { Employee } from "./Employee";
import { User } from "./user";
import { Seller } from "./Seller";

//1-
//const usuarios: User = new User("1", "saruman@saruman.com", "Saruman", "1234");
//console.log(usuarios.getId(), usuarios.getName(), usuarios.getEmail());
//A- Não, precisaria criar um public get, pois password está private
//B- 1 vez

//2-
// const cliente: Customer = new Customer(
//   "10",
//   "aragorn@aragorn.com",
//   "Aragorn",
//   "1234",
//   "1111-111-111-1111"
// );
// console.log(
//   cliente.getId(),
//   cliente.getName(),
//   cliente.getEmail(),
//   cliente.getCreditCard(),
//   cliente.purchaseTotal
// );
//A- 1 vez
//B- 1 vez, porque a classe Customer é uma extensão da classe User, é a filha e aí quando criamos a instancia  as informações passam pela classe pai.

//3 - A - Não, pois ela herda o encapsulamento do pai.
//4
//console.log(cliente.introduceYourself());
//5 - Método alterado
//6-
// const funcionario: Employee = new Employee(
//   "60",
//   "frodo@frodo.com",
//   "Frodo",
//   "1234",
//   "10/07/2020",
//   1000
// );

// console.log(
//   funcionario.getAdmissionDate(),
//   funcionario.getBaseSalary(),
//   funcionario.getEmail(),
//   funcionario.getId(),
//   funcionario.getName(),
//   funcionario.introduceYourself()
// );

//A - 1 vez
//B - AdmissionDate, BaseSalary, Email, Id, Name, introduceYourself
//7 -
//console.log(funcionario.calculateTotalSalary());

//8 -
const vendedor: Seller = new Seller(
  "70",
  "legolas@legolas.com",
  "Legolas",
  "1234",
  "10/07/2020",
  2000
);
//A - Id, email, name, password, admissionDate, baseSalary
//B
console.log("Salário Total", vendedor.calculateTotalSalary());
console.log("Data de Admissão", vendedor.getAdmissionDate());
console.log("Salário Base", vendedor.getBaseSalary());
console.log("Email", vendedor.getEmail());
console.log("Id", vendedor.getId());
console.log("Nome", vendedor.getName());
console.log("Mensagem", vendedor.introduceYourself());
// salário total, data de admissão, salário base, email, id, nome, mensagem . não consegui imprimir a "password", pois está como private e não tem nenhum método publico para ela

//9 -
vendedor.setSalesQuantity(10);
console.log(vendedor.getQuantity());
//Não, só conseguimos imprimir com o método publico getQuantity, pois o salesQuantity está como private.

//10 -
const vendedor2: Seller = new Seller(
  "80",
  "garrosh@legolas.com",
  "Garrosh",
  "1234",
  "10/07/2020",
  3000
);

vendedor2.setSalesQuantity(10);

console.log("Salário Total vendedor2", vendedor2.calculateTotalSalary());
//O valor do método alterado, pois classes filhas podem alterar a implementação de funções da superclasse, isso se chama Override
