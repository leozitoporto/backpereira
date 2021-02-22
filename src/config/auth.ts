export default {
  jwt: {
    // palavra chave = mamae e o topo do mundo
    // secret: process.env.APP_SECRET || 'default',
    secret: process.env.APP_SECRET,
    expiresIn: '1180d',
  },
};
