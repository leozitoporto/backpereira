import { format, isBefore, startOfHour } from 'date-fns';
import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';

import Sale from '../infra/typeorm/entities/Sale';
import ISalesRepository from '../repositories/ISalesRepository';
import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';

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

    @inject('NotificationsRepository')
    private motificationsRepository: INotificationsRepository,
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

    const dateFormatted = format(dt_valid, "dd/MM/yyyy 'às' HH:mm'H'");

    await this.motificationsRepository.create({
      recipient_id: sale.id,
      content: `Nova venda criada. (${name} - validade: ${dateFormatted})`,
    })

    return sale;
  }
}

export default CreateSaleService;
