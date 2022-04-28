import { Client } from '../../types';
import { clientsModel } from '../models'

export const clientsService = {
  async list(): Promise<Client[]> {
    const result = await clientsModel.list();
    return result;
  }
}
