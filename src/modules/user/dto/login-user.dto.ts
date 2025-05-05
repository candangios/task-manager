import * as Joi from 'joi';

export const LoginUserSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});