import { injectable, inject } from 'tsyringe';

import { classToClass } from 'class-transformer';

import ISalesRepository from '@modules/sales/repositories/ISalesRepository';

import Sale from '@modules/sales/infra/typeorm/entities/Sale';

@injectable()
class ListAllSalesService {
  constructor(
    @inject('SalesRepository')
    private salesRepository: ISalesRepository,
  ) {}

   public async execute(): Promise<Sale[]> {

    const  sales = await this.salesRepository.all();

    return sales;
  }
}

export default (classToClass(ListAllSalesService));
