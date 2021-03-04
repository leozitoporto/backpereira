import Sale from '../infra/typeorm/entities/Sale';
import ICreateSaleDTO from '../dtos/ICreateSaleDTO';
//import IListSaleDTO from '../dtos/IListSaleDTO';
// import IFindAllInMonthFromProviderDTO from '../dtos/IFindAllInMonthFromProviderDTO';
// import IFindAllInDayFromProviderDTO from '../dtos/IFindAllInDayFromProviderDTO';

export default interface ISalesRepository {
  create(data: ICreateSaleDTO): Promise<Sale>;
   findByDate(dt_valid: Date): Promise<Sale[] | undefined>;
   findById(sale_id: string): Promise<Sale | undefined>;
   save(sale: Sale): Promise<Sale>;
   all(): Promise<Sale[] | undefined>;
  // findAllInMonthFromProvider(
  //   data: IFindAllInMonthFromProviderDTO,
  //  ): Promise<Appointment[]>;
  // findAllInDayFromProvider(
  //   data: IFindAllInDayFromProviderDTO,
  // ): Promise<Appointment[]>;
}
