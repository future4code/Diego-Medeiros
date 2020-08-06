import { Client } from "./Client";
import { Place } from "./Place";
import { Commerce } from "./Commerce";
import { Industry } from "./Industry";
import { Residence } from "./Residence";
import { ResidentialClient } from "./ResidentialClient";
import { ComercialClient } from "./ComercialClient";
import { ClientManager } from "./ClientManager";
import { IndustrialClient } from "./IndustrialClient";

const client: Client = {
  name: "Saruman",
  registrationNumber: 1,
  consumedEnergy: 100,

  calculateBill: (): number => {
    return 2;
  },
};

//console.log(client, client.calculateBill());

//2 -
//const place: Place = new Place("11111-111");
//A - Não pode criar uma instancia de uma classe abstrata
//B - Precisariamos criar uma classe filha da Place e instanciar essa subclasse

//3 -
// const commerce: Commerce = new Commerce(10, "22222-222");
// const industry: Industry = new Industry(5, "33333-333");
// const residence: Residence = new Residence(3, "44444-444");

// console.log("CEP Commerce", commerce.getCep());
// console.log("CEP Industry", industry.getCep());
// console.log("CEP Residence", residence.getCep());

//4 -
//const residentialClient : ResidentialClient = new ResidentialClient("Gimli", 10, 100, "111111-11", "33333-333", 1)
//Possui os metodos e propriedades da sua classe pai Place e da interface Client, pois é filha da classe Place e implementa a interface Client
//5 -
//const comercialClient : ComercialClient = new ComercialClient("Legolas", 20, 300, "555-555", "55555-555", 20)
//A - Os métodos e atributos da interface Client. (foi preciso implementa-los)
//B - Os métodos e atributos que agora vem da classe Commerce (sua classe pai)

//6 -
//A - Da classe Industry, pois nela possui os metodos e atributos necessários para essa classe, atributo quantidade de máquinas e
//método de pegar a quantidade de máquinas.
//B - Implementa a interface Client, pois é nela que possui todos atributos e métodos que precisamos implementar e podemos ter mais de uma tipagem pra classe Client, pois não podemos extender mais de uma classe no typescript
//C - Para que as informações privadas não possam ser alteradas de nenhuma maneira.

//7 - Feito no ClientManager

//8 - Feito no ClientManager, abaixo está os testes
const clientManager: ClientManager = new ClientManager();
const residentialClient: ResidentialClient = new ResidentialClient(
  "Gimli",
  10,
  100,
  "111111-11",
  "33333-333",
  1
);
clientManager.registerClient(residentialClient);

const comercialClient: ComercialClient = new ComercialClient(
  "Legolas",
  20,
  300,
  "555-555",
  "55555-555",
  20
);
clientManager.registerClient(comercialClient);

const industrialClient: IndustrialClient = new IndustrialClient(
  "Aragorn",
  30,
  400,
  "666-666",
  "77777-777",
  200
);
clientManager.registerClient(industrialClient);

console.log("Total de clientes:", clientManager.getClientsQuantity());
clientManager.deleteUser(20);
console.log(
  "Total de clientes após o delete:",
  clientManager.getClientsQuantity()
);

console.log(
  "Total da soma de todos os clientes:",
  clientManager.calculateTotalIncome()
);

console.log(
  "Conta de um cliente especifico:",
  clientManager.calculateBillOfClient(30)
);
