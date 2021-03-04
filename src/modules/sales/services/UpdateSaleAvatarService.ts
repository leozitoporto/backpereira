import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import ISalesRepository from '../repositories/ISalesRepository';
import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';

import Sale from '../infra/typeorm/entities/Sale';

interface IRequest {
  sale_id: string;
  avatarFilename: string;
}

@injectable()
class UpdateSaleAvatarService {
  constructor(
    @inject('SalesRepository')
    private salesRepository: ISalesRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({ sale_id, avatarFilename }: IRequest): Promise<Sale> {
    const sale = await this.salesRepository.findById(sale_id);

    if (!sale) {
      throw new AppError(
        'Somente usuários autenticados podem incluir avatar.',
        401,
      );
    }

    // se encontrou apaga o arquivo
    if (sale.avatar) {
     await this.storageProvider.deleteFile(sale.avatar);
    }

    const filename = await this.storageProvider.saveFile(avatarFilename);

    sale.avatar = filename;

    await this.salesRepository.save(sale);

    return sale;
  }
}

export default UpdateSaleAvatarService;
