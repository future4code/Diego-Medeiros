import { Client } from "./Client";
import { Place } from "./Place";
import { Commerce } from "./Commerce";
import { Industry } from "./Industry";
import { Residence } from "./Residence";

const client: Client = {
  name: "Saruman",
  registrationNumber: 1,
  consumedEnergy: 100,

  calculateBill: (): number => {
    return 2;
  },
};

console.log(client, client.calculateBill());

//2 -
//const place: Place = new Place("11111-111");
//A - Não pode criar uma instancia de uma classe abstrata
//B - Precisariamos criar uma classe filha da Place e instanciar essa subclasse

const commerce: Commerce = new Commerce();
const industry: Industry = new Industry();
const residence: Residence = new Residence();
