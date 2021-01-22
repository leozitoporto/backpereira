import { isBefore, startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import Sale from '../models/Sale';
import SalesRepository from '../repositories/SalesRepository';

interface Request {
  name: string;
  price: number;
  obs: string;
  dtvalid: Date;
  urlimg: string;
  tpsale: string;
}

class CreateSaleService {
  public async execute({
    name, price, obs, tpsale, dtvalid, urlimg,
  }: Request): Promise<Sale> {
    const salesRepository = getCustomRepository(SalesRepository);

    const validDate = startOfHour(dtvalid);

    if (isBefore(validDate, Date.now())) {
      throw Error('Você não pode criar uma venda com data de validade passada');
    }

    const sale = salesRepository.create({
      name,
      price,
      obs,
      dtvalid: validDate,
      urlimg,
      tpsale,
    });

    await salesRepository.save(sale);

    return sale;
  }
}

export default CreateSaleService;
