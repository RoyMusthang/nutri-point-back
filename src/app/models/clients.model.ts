import { clientsDAO } from '../../db';
import { AddClient, Client } from '../../types';

export const clientsModel = {
  async list(): Promise<Client[]> {
    const result = await clientsDAO.findAll({ raw: true });
    return result as unknown as Client[];
    // gambiarra de inferência de tipo coisa do próprio sequelize
  },

  async add(data: AddClient): Promise<Client['id']> {
    const result = await clientsDAO.create({
      ...data,
    }) as any;
    return result.id;
  },

  async get(id: Client['id']): Promise<Client> {
    const result = await clientsDAO.findOne({ where: { id }, raw: true });
    return result as unknown as Client;
  }
};
