import Joi from 'joi';
import { AddClient } from '../../types';
import { runSchema } from './_validator';

export const clientValidator = {
  async bodyAdd(value: unknown): Promise<AddClient> {
    const schema = Joi.object<AddClient>({
      description: Joi.array(),
      useMedication: Joi.boolean().default(false)
    });

    const result = await runSchema(schema, value);
    return result;
  }
};