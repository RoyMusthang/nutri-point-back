import { clientsDAO, goalsDAO } from '../../db';
import { AddClient, Client } from '../../types';

export const clientsModel = {
  async list(): Promise<Client[]> {
    const result = await clientsDAO.findAll({ raw: true });
    return result as unknown as Client[];
    // gambiarra de inferência de tipo coisa do próprio sequelize
  },

  async add(data: AddClient): Promise<void> {
    const { description, useMedication } = data;
    const result = await clientsDAO.create({
      useMedication,
    }) as any;
    Promise.all(
      description.map(async (e) => {
        await goalsDAO.create({
          goals: e,
          idCreate: result.id,
        });
      }))
  }
};
