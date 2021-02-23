interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'boutiquepereira@zungasoft.net',
      name: 'Equipe Boutique de Carnes Pereira',
    },
  },
} as IMailConfig;
