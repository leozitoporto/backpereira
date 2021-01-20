import { uuid } from 'uuidv4';

class Sales {
  id: string;

  name: string;

  price: number;

  obs: string;

  dtvalid: Date;

  urlimg: string;

  tpsale: string;

  constructor({
    name, price, obs, dtvalid, urlimg, tpsale,
  }: Omit<Sales, 'id'>) {
    // Omit = excluo uma propriedade('id') de dentro de um tipo('Sales')
    this.id = uuid();
    this.name = name;
    this.price = price;
    this.obs = obs;
    this.dtvalid = dtvalid;
    this.urlimg = urlimg;
    this.tpsale = tpsale;
  }
}
export default Sales;
