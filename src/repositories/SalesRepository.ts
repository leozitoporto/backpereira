import Sale from '../models/Sales';

interface CreateSaleDTO {
  name: string;
  price: number;
  obs: string;
  dtvalid: Date;
  urlimg: string;
  tpsale: string;
}

class SalesRepository {
  private sales: Sale[];

  constructor() {
    this.sales = [];
  }

  public all(): Sale[] {
    return this.sales;
  }

  public create({
    name, price, obs, dtvalid, urlimg, tpsale,
  }: CreateSaleDTO): Sale {
    const sale = new Sale({
      name, price, obs, dtvalid, urlimg, tpsale,
    });

    this.sales.push(sale);

    return sale;
  }
}

export default SalesRepository;
