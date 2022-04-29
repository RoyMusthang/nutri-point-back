import { Sequelize } from 'sequelize';
import vars from '../vars';
import makeGoals from './goals.dao';
import makeClient from './nutri.dao';

const sequelize = new Sequelize(vars.db.url, {
  dialect: 'mysql'
});

export const clientsDAO = makeClient(sequelize);
export const goalsDAO = makeGoals(sequelize);

export default sequelize;
