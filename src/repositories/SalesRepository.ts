import { Entity, EntityRepository, Repository } from 'typeorm';
import Sale from '../models/Sale';

// interface CreateSaleDTO {
//   name: string;
//   price: number;
//   obs: string;
//   dt_valid: Date;
//   url_img: string;
//   tp_sale: string;
// }

@EntityRepository(Sale)
class SalesRepository extends Repository<Sale> {

}

export default SalesRepository;
