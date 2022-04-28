import dotenv from 'dotenv';

dotenv.config();

const { env } = process;

export default {
  api: {
    port: Number(env.PORT || 3001)
  },
  db: {
    url: env.DB_URL || 'mysql://root:root@127.0.0.1:3306/nutri'
  }
};
