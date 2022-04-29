import { AddClient, Client } from '../../types';
import { clientsModel } from '../models';

export const clientsService = {
  async list(): Promise<Client[]> {
    const result = await clientsModel.list();
    return result;
  },

  async add(data: AddClient): Promise<void> {
    const id = await clientsModel.add(data);
    return id;
  }
};
