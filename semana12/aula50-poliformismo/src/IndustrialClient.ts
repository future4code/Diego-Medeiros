import { Industry } from "./Industry";
import { Client } from "./Client";

export class IndustrialClient extends Industry implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private numberIndustry: string,
    cep: string,
    machinesQuantity: number
  ) {
    super(machinesQuantity, cep);
  }

  public getNumberIndustry = (): string => {
    return this.numberIndustry;
  };

  public calculateBill(): number {
    return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
  }
}
