import { Client } from '../../types';
import { clientsService } from '../services';

export const clientsController = {
    async list(): Promise<Client[]> {
        const result = await clientsService.list();
        return result;
    }
};
