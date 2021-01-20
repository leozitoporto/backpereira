import { isBefore, startOfHour } from 'date-fns';
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
  private salesRepository: SalesRepository;

  constructor(salesRepository: SalesRepository) {
    this.salesRepository = salesRepository;
  }

  public execute({
    name, price, obs, tpsale, dtvalid, urlimg,
  }: Request): Sale {
    const validDate = startOfHour(dtvalid);

    if (isBefore(validDate, Date.now())) {
      throw Error('Você não pode criar uma venda com data de validade passada');
    }

    const sale = this.salesRepository.create({
      name,
      price,
      obs,
      dtvalid: validDate,
      urlimg,
      tpsale,
    });
    return sale;
  }
}

export default CreateSaleService;
