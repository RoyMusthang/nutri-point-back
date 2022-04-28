import { clientsDAO } from '../../db';
import { Client } from '../../types';

export const clientsModel = {
  async list(): Promise<Client[]> {
    const result = await clientsDAO.findAll({ raw: true });
    return result as unknown as Client[];
    // gambiarra de inferência de tipo coisa do proprio sequelize
  }
};
