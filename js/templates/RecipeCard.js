class RecipeCard {
  constructor(recipe) {
    this._recipe = recipe
  }

  listIngredients() {
    const $wrapperIngredients = document.createElement('p')
    for (let ingredient of this._recipe.ingredients) {
      var $wrapperIngredient = document.createElement('p')
      $wrapperIngredient.classList.add('ingredient')

      const $wrapperName = document.createElement('span')
      $wrapperName.innerHTML = ingredient.ingredient
      $wrapperIngredient.appendChild($wrapperName)

      if (ingredient.quantity != null) {
        const $wrapperQuantity = document.createElement('span')
        $wrapperQuantity.innerHTML = ingredient.quantity
        $wrapperIngredient.appendChild($wrapperQuantity)
      }
      if (ingredient.unit != null) {
        const $wrapperUnit = document.createElement('span')
        $wrapperUnit.innerHTML = ingredient.unit
        $wrapperIngredient.appendChild($wrapperUnit)
      }
      $wrapperIngredients.appendChild($wrapperIngredient)
    }
    return $wrapperIngredients.innerHTML
  }

  createRecipeCard() {
    const $wrapper = document.createElement('recipe')
    $wrapper.classList.add('recipe-card-wrapper')
    const recipeTemplate = `
            <div class='media-picture'></div>
            <h2 class= "title">
                <span class="name">${this._recipe.name}</span>
                <span class="time">${this._recipe.time}</span>
            </h2>
            <h4 class= "details">
                <span class= "ingredients">${this.listIngredients()}</span>
                <span class="desc">${this._recipe.description}</span>
            </h4>
        `
    $wrapper.innerHTML = recipeTemplate

    return $wrapper
  }

  createIngredientsList() {
    for (let ingredient of this._recipe.ingredients) {
      var $wrapperName = document.createElement('li')
      $wrapperName.innerHTML = ingredient.ingredient
    }
    return $wrapperName
  }

  createApparelsList() {
    let $wrapper = document.createElement('li')
    $wrapper.innerHTML = this._recipe.appliance

    return $wrapper
  }

  createUstensilsList() {
    for (let ustensil of this._recipe.ustensils) {
      var $wrapper = document.createElement('li')
      $wrapper.innerHTML = ustensil
    }
    return $wrapper
  }
}
