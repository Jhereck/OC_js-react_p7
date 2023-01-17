class IngCard {
  constructor(recipe) {
    this._recipe = recipe
  }

  createIngredientsList() {
    for (let ingredient of this._recipe.ingredients) {
      var $wrapperName = document.createElement('li')
      $wrapperName.innerHTML = ingredient.ingredient
    }
    return $wrapperName
  }

  createApparelsList() {
    for (let appl of this._recipe.appliance) {
      var $wrapperName = document.createElement('li')
      $wrapperName.innerHTML = ingredient.appliance
    }
    return $wrapperName
  }
}
