import { EntityRepository, getRepository, Repository, Raw } from 'typeorm';

import ISalesRepository from '@modules/sales/repositories/ISalesRepository';
import ICreateSaleDTO from '@modules/sales/dtos/ICreateSaleDTO';
import Sale from '../entities/Sale';


class SalesRepository implements ISalesRepository {
  private ormRepository: Repository<Sale>;

  constructor() {
    this.ormRepository = getRepository(Sale);
  }

  //  public async all(): Sale[] {
  //    return this.sales;
  //  }

  public async findByDate(
    dt_valid: Date,
  ): Promise<Sale[] | undefined> {

    const sales = await this.ormRepository.find({
      where: {
        dt_valid: Raw(
          dateFieldName =>
          `to_char(${dateFieldName}, 'DD-MM-YYYY') <= to_char(CURRENT_DATE, 'DD-MM-YYYY')`,

        ),
      },
    });

    return sales;
  }

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
