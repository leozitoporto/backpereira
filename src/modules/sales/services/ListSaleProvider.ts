import { injectable, inject } from 'tsyringe';

import { format, startOfHour, isBefore } from 'date-fns';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';
import ISalesRepository from '@modules/sales/repositories/ISalesRepository';
import { classToClass } from 'class-transformer';

import AppError from '@shared/errors/AppError';

import Sale from '@modules/sales/infra/typeorm/entities/Sale';

interface IRequest {
  dt_valid: Date;
}

type IResponse = Array<{
  name: string;
  price: number;
  obs: string;
  avatar: string;
}>;

@injectable()
class ListSalesService {
  constructor(
    @inject('SalesRepository')
    private salesRepository: ISalesRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

   public async execute({ dt_valid }: IRequest): Promise<Sale[]> {
    const saleValid = startOfHour(dt_valid);

    // if (isBefore(saleValid, Date.now())) {
    //   throw new AppError('Você não pode criar uma venda com data passada');
    // }

     const  sales = await this.salesRepository.findByDate(saleValid);



    return sales;
  }
}

export default ListSalesService;
