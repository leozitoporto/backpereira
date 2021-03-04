import { EntityRepository, getRepository, Repository, Raw } from 'typeorm';

import ISalesRepository from '@modules/sales/repositories/ISalesRepository';
import ICreateSaleDTO from '@modules/sales/dtos/ICreateSaleDTO';
import Sale from '../entities/Sale';


class SalesRepository implements ISalesRepository {
  private ormRepository: Repository<Sale>;

  constructor() {
    this.ormRepository = getRepository(Sale);
  }

   public async all(): Promise<Sale[] | undefined> {
     return this.ormRepository.find();
   }

  public async findById(id: string): Promise<Sale | undefined> {
    const sale = await this.ormRepository.findOne(id);
    return sale;
  }

  public async findByDate(
    dt_valid: Date,
  ): Promise<Sale[] | undefined> {

    const sales = await this.ormRepository.find({
      where: {
        dt_valid: Raw(
          dateFieldName =>
          `${dateFieldName} >= NOW()`,
        ),
      },
    });

    return sales;
  }

  public async create(saleData: ICreateSaleDTO): Promise<Sale> {
    const sale = this.ormRepository.create(saleData);

    await this.ormRepository.save(sale);

    return sale;
  }

  public async save(sale: Sale): Promise<Sale> {
    return this.ormRepository.save(sale);
  }
}

export default SalesRepository;
