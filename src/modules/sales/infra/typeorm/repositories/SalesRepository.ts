import { EntityRepository, getRepository, Repository } from 'typeorm';

import ISalesRepository from '@modules/sales/repositories/ISalesRepository';
import ICreateSaleDTO from '@modules/sales/dtos/ICreateSaleDTO';
import Sale from '../entities/Sale';

interface CreateSaleDTO {
  name: string;
  price: number;
  obs: string;
  dt_valid: Date;
  avatar: string;
  tp_sale: string;
}

class SalesRepository implements ISalesRepository {
  private ormRepository: Repository<Sale>;

  constructor() {
    this.ormRepository = getRepository(Sale);
  }

  // public assync all(): Sale[] {
  //   return this.sales;
  // }

  public async create({
    name,
    price,
    obs,
    dt_valid,
    avatar,
    tp_sale,
  }: ICreateSaleDTO): Promise<Sale> {
    const sale = this.ormRepository.create({
      name,
      price,
      obs,
      dt_valid,
      avatar,
      tp_sale,
    });

    await this.ormRepository.save(sale);

    return sale;
  }
}

export default SalesRepository;
