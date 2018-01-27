import menu from './menu'
import header from './header'
import gearConfig from './gear-config'
import mongoseeValidations from './mongoose-validations'

export default {
  ...header,
  ...menu,
  ...gearConfig,
  ...mongoseeValidations,
}
