import { Entity, EntityRepository, Repository } from 'typeorm';
import Sale from '../models/Sale';

// interface CreateSaleDTO {
//   name: string;
//   price: number;
//   obs: string;
//   dtvalid: Date;
//   urlimg: string;
//   tpsale: string;
// }

@EntityRepository(Sale)
class SalesRepository extends Repository<Sale> {

}

export default SalesRepository;
