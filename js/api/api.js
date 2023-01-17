class Api {
  constructor(url) {
    this._url = url
  }

  async get() {
    return fetch(this._url)
      .then((res) => res.json())
      .catch((err) => console.log('an error occured', err))
  }
}

class RecipesApi extends Api {
  constructor(url) {
    super(url)
  }

  async getRecipes() {
    const res = await this.get()
    return res.recipes
  }

  async getRecipesPerResearch(x) {
    const res = await this.get()

    const results = res.recipes.filter((el) => {
      for (let ingredient of el.ingredients) {
        if (
          ingredient.ingredient
            .trim()
            .toLowerCase()
            .includes(x.trim().toLowerCase()) === true
        ) {
          return el
        }
      }
      if (
        el.name.trim().toLowerCase().includes(x.trim().toLowerCase()) ||
        el.description.trim().toLowerCase().includes(x.trim().toLowerCase())
      ) {
        return el
      }
    })
    return results
  }
}
