document.getElementById('research').addEventListener('keyup', search)

function search() {
  var x = document.getElementById('research').value
  if (x.length >= 3) {
    document.querySelector('.recipes_section').innerHTML = ''
    app.recipesPerResearch(x)
  }
}
