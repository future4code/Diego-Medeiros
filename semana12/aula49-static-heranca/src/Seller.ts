import { Employee } from "./Employee";

export class Seller extends Employee {
  //ATRIBUTOS ESTÁTICOS
  static SELLING_COMMISSION: number = 5;

  //#############################################
  private salesQuantity: number = 0;

  public setSalesQuantity = (numero: number): number => {
    return (this.salesQuantity = numero);
  };

  public getQuantity = (): number => {
    return this.salesQuantity;
  };

  public calculateTotalSalary = (): number => {
    return (
      this.baseSalary +
      Employee.BENEFITS_VALUE +
      Seller.SELLING_COMMISSION * this.salesQuantity
    );
  };
}
