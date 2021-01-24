import { Entity, EntityRepository, Repository } from 'typeorm';
import Sale from '../models/Sale';

@EntityRepository(Sale)
class SalesRepository extends Repository<Sale> {

}

export default SalesRepository;
