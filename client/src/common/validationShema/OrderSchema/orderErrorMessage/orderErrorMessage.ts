import { OrderSchemaRule } from '../orderSchemaRules/orderSchemaRule'

export const orderErrorMessage = {
  FIELD_REQUIRED: 'Field required',
  FIELD_EMPTY: 'Field can\'t be empty',
  FIELD_MIN_LENGTH: `Field must be more than 1 ${OrderSchemaRule.EMAIL_MIN_LENGTH}`
}
