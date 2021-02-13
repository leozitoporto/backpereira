import { container } from 'tsyringe';

// import '@modules/users/providers';
// import './providers';

import ISalesRepository from '@modules/sales/repositories/ISalesRepository';
import SalesRepository from '@modules/sales/infra/typeorm/repositories/SalesRepository';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

// import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
// import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

// import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';
// import NotificationsRepository from '@modules/notifications/infra/typeorm/repositories/NotificationRepository';

container.registerSingleton<ISalesRepository>(
  'SalesRepository',
  SalesRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

// container.registerSingleton<IUserTokensRepository>(
//   'UserTokensRepository',
//   UserTokensRepository,
// );

// container.registerSingleton<INotificationsRepository>(
//   'NotificationsRepository',
//   NotificationsRepository,
// );
