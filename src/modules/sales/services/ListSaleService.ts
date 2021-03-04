import { injectable, inject } from 'tsyringe';

import { format, startOfHour, isBefore } from 'date-fns';

import ISalesRepository from '@modules/sales/repositories/ISalesRepository';

import Sale from '@modules/sales/infra/typeorm/entities/Sale';

interface IRequest {
  dt_valid: Date;
}

@injectable()
class ListSalesService {
  constructor(
    @inject('SalesRepository')
    private salesRepository: ISalesRepository,
  ) {}

   public async execute({ dt_valid }: IRequest): Promise<Sale[]> {
    const saleValid = startOfHour(dt_valid);

    const  sales = await this.salesRepository.findByDate(saleValid);

    return sales;
  }
}

export default ListSalesService;
