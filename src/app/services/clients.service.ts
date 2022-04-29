import { AddClient, Client } from '../../types';
import { clientsModel } from '../models';

export const clientsService = {
  async list(): Promise<Client['id']> {
    const result = await clientsModel.init();
    return result;
  },

  async add(data: AddClient): Promise<Client['id']> {
    const id = await clientsModel.add(data);
    return id;
  },

  async get(id: Client['id']): Promise<Client> {
    const client = await clientsModel.get(id);
    return client;
  }
};
