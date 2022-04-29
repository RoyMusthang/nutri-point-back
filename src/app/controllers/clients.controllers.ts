import { Client } from '../../types';
import { clientsService } from '../services';
import { clientValidator } from '../validators';

export const clientsController = {
  async list(): Promise<Client[]> {
    const result = await clientsService.list();
    return result;
  },

  async add(body: unknown): Promise<void> {
    const data = await clientValidator.bodyAdd(body);
    await clientsService.add(data);
  },

  async get(params: string): Promise<Client> {
    const result = await clientsController.get(params);
    return result;
  }
};
