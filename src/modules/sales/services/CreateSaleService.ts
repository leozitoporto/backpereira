import { isBefore, startOfHour } from 'date-fns';
import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';

import Sale from '../infra/typeorm/entities/Sale';
import ISalesRepository from '../repositories/ISalesRepository';

interface IRequest {
  name: string;
  price: number;
  obs: string;
  dt_valid: Date;
  avatar: string;
  tp_sale: string;
}

@injectable()
class CreateSaleService {
  constructor(
    @inject('SalesRepository')
    private salesRepository: ISalesRepository,
  ) {}

  public async execute({
    name,
    price,
    obs,
    tp_sale,
    dt_valid,
    avatar,
  }: IRequest): Promise<Sale> {
    const validDate = startOfHour(dt_valid);

    if (isBefore(validDate, Date.now())) {
      throw new AppError(
        'Você não pode criar uma venda com data de validade passada',
      );
    }

    const sale = await this.salesRepository.create({
      name,
      price,
      obs,
      dt_valid: validDate,
      avatar,
      tp_sale,
    });

    return sale;
  }
}

export default CreateSaleService;
