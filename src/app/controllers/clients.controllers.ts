import { Client } from '../../types';
import { clientsService } from '../services';
import { clientValidator } from '../validators';

export const clientsController = {
  async list(): Promise<Client[]> {
    const result = await clientsService.list();
    return result;
  },

  async add(body: unknown): Promise<Client> {
    const data = await clientValidator.bodyAdd(body);
    const id = await clientsService.add(data);
    const result = await clientsService.get(id);
    return result;
  },

  async get(params: string): Promise<Client> {
    const result = await clientsController.get(params);
    return result;
  }
};
