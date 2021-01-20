import Sale from '../models/Sales';

class SalesRepository {
  private sales: Sale[];

  constructor() {
    this.sales = [];
  }

  public create(
    name: string, price: number, obs: string, dtvalid: Date, urlimg: string, tpsale: string,
  ): Sale {
    const sale = new Sale(name, price, obs, dtvalid, urlimg, tpsale);

    this.sales.push(sale);

    return sale;
  }
}

export default SalesRepository;
