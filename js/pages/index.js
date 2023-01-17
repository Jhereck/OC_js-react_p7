class App {
  constructor() {
    this.$recipesWrapper = document.querySelector('.recipes_section')
    this.$ingWrapper = document.querySelector('.ingredients')
    this.$appWrapper = document.querySelector('.apparels')
    this.$ustWrapper = document.querySelector('.ustensils')
    this.recipesApi = new RecipesApi('./data/recipes.json')
  }

  async allRecipes() {
    const recipesData = await this.recipesApi.getRecipes()

    recipesData
      .map((recipe) => new RecipeModel(recipe))
      .forEach((recipe) => {
        const Template = new RecipeCard(recipe)
        this.$recipesWrapper.appendChild(Template.createRecipeCard())
        this.$ingWrapper.appendChild(Template.createIngredientsList())
        this.$appWrapper.appendChild(Template.createApparelsList())
        this.$ustWrapper.appendChild(Template.createUstensilsList())
      })
  }

  async recipesPerResearch(x) {
    const recipesData = await this.recipesApi.getRecipesPerResearch(x)

    recipesData
      .map((recipe) => new RecipeModel(recipe))
      .forEach((recipe) => {
        const Template = new RecipeCard(recipe)
        this.$recipesWrapper.appendChild(Template.createRecipeCard())
      })
  }
}

const app = new App()
app.allRecipes()
