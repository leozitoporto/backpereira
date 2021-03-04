import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import ISalesRepository from '../repositories/ISalesRepository';

import Sale from '../infra/typeorm/entities/Sale';

interface IRequest {
  sale_id: string;
  name: string;
  price: number;
  dt_valid: Date;
  obs: string;
  tp_sale: string;
}

@injectable()
class UpdateSaleService {
  constructor(
    @inject('SalesRepository')
    private salesRepository: ISalesRepository,

    ) {}

  public async execute({
    sale_id,
    name,
    price,
    dt_valid,
    obs,
    tp_sale,
  }: IRequest): Promise<Sale> {
    const sale = await this.salesRepository.findById(sale_id);

    if (!sale) {
      throw new AppError('Venda não encontrada');
    }

    sale.name = name;
    sale.price = price;
    sale.dt_valid = dt_valid;
    sale.obs = obs;
    sale.tp_sale = tp_sale;

    return this.salesRepository.save(sale);
  }
}

export default UpdateSaleService;
