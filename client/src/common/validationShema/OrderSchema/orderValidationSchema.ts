import Joi from 'joi';
import { OrderSchemaRule } from './orderSchemaRules/orderSchemaRule';
import { orderErrorMessage } from './orderErrorMessage/orderErrorMessage';

export const orderValidationSchema = Joi.object({
  name: Joi.string()
    .trim()
    .min(OrderSchemaRule.NAME_MIN_LENGTH)
    .required()
    .messages({
      'string.required': orderErrorMessage.FIELD_REQUIRED,
      'string.min': orderErrorMessage.FIELD_MIN_LENGTH,
      'string.empty': orderErrorMessage.FIELD_EMPTY
    }),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: false } })
    .trim()
    .min(OrderSchemaRule.EMAIL_MIN_LENGTH)
    .required()
    .messages({
      'string.required': orderErrorMessage.FIELD_REQUIRED,
      'string.min': orderErrorMessage.FIELD_MIN_LENGTH,
      'string.empty': orderErrorMessage.FIELD_EMPTY,
      'string.email': 'Incorrect email'
    }),
  phoneNumber: Joi.string()
    .regex(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/)
    .trim()
    .required()
    .messages({
      'string.required': orderErrorMessage.FIELD_REQUIRED,
      'string.pattern.base': 'Incorrect number',
      'string.empty': orderErrorMessage.FIELD_EMPTY
    }),
  address: Joi.string()
    .trim()
    .min(OrderSchemaRule.ADDRESS_MIN_LENGTH)
    .required()
    .messages({
      'string.required': orderErrorMessage.FIELD_REQUIRED,
      'string.min': orderErrorMessage.FIELD_MIN_LENGTH,
      'string.empty': orderErrorMessage.FIELD_EMPTY
    })
})
