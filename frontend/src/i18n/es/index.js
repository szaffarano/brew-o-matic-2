import menu from './menu'
import header from './header'
import gearConfig from './gear-config'
import mongoseeValidations from './mongoose-validations'
import addRecipe from './add-recipe'

export default {
  ...header,
  ...menu,
  ...gearConfig,
  ...mongoseeValidations,
  ...addRecipe,
}
