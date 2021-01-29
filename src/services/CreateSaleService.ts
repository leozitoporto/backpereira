import { isBefore, startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import Sale from '../models/Sale';
import SalesRepository from '../repositories/SalesRepository';

import AppError from '../errors/AppError';

interface Request {
  name: string;
  price: number;
  obs: string;
  dt_valid: Date;
  avatar: string;
  tp_sale: string;
}

class CreateSaleService {
  public async execute({
    name, price, obs, tp_sale, dt_valid, avatar,
  }: Request): Promise<Sale> {
    const salesRepository = getCustomRepository(SalesRepository);

    const validDate = startOfHour(dt_valid);

    if (isBefore(validDate, Date.now())) {
      throw new AppError('Você não pode criar uma venda com data de validade passada');
    }

    const sale = salesRepository.create({
      name,
      price,
      obs,
      dt_valid: validDate,
      avatar,
      tp_sale,
    });

    await salesRepository.save(sale);

    return sale;
  }
}

export default CreateSaleService;
