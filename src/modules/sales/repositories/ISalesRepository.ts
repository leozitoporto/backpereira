import Sale from '../infra/typeorm/entities/Sale';
import ICreateSaleDTO from '../dtos/ICreateSaleDTO';
// import IFindAllInMonthFromProviderDTO from '../dtos/IFindAllInMonthFromProviderDTO';
// import IFindAllInDayFromProviderDTO from '../dtos/IFindAllInDayFromProviderDTO';

export default interface ISalesRepository {
  create(data: ICreateSaleDTO): Promise<Sale>;
  // findByDate(date: Date, provider_id: string): Promise<Appointment | undefined>;
  // findAllInMonthFromProvider(
  //   data: IFindAllInMonthFromProviderDTO,
  // ): Promise<Appointment[]>;
  // findAllInDayFromProvider(
  //   data: IFindAllInDayFromProviderDTO,
  // ): Promise<Appointment[]>;
}
