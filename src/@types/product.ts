export interface IProduct {
  name: string;
  total: number;
  initialInvest: number;
  readonly growth: string;
}

export class Product implements IProduct {
  public name: string;
  public total: number;
  public initialInvest: number;
  get growth(): string {
    return ((this.initialInvest / this.total) * 100).toFixed(2);
  }

  constructor(name: string, total: number, initialInvest: number) {
    this.name = name;
    this.total = total;
    this.initialInvest = initialInvest;
  }
}
