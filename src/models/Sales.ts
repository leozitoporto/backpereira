import { uuid } from 'uuidv4';

class Sales {
  id: string;

  name: string;

  price: number;

  obs: string;

  tpsale: string;

  dtvalid: Date;

  urlimg: string;

  constructor(
    name: string, price: number, obs: string, dtvalid: Date, urlimg: string, tpsale: string,
  ) {
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
