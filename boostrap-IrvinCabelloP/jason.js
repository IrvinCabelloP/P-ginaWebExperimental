
//Esta parte del código hace la conexión con la página de la pokeapi y trae al pokemon con el id.
async function getPokemon(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id.toLowerCase()}/`)
    const data = await response.json()
    return data
  }

//Esta parte del código trae los datos del pokemon y los muestra dentro de la carta.
function updatePokemon(pokemon){
  window.pokemon.textContent = pokemon.name
  window.salud.textContent = `hp ${pokemon.stats[0].base_stat}`
  window.image.setAttribute('src', pokemon.sprites.front_default)
  window.info1.textContent = pokemon.types[0].type.name
  window.info2.textContent = pokemon.types[1].type.name
  window.pokemonid.textContent = `#${pokemon.id.toString().padStart(3, 0)}`
  window.habilidad1.textContent = pokemon.abilities[0].ability.name
  window.habilidad2.textContent = pokemon.abilities[1].ability.name
  window.habilidad3.textContent = pokemon.abilities[2].ability.name
}



//Esta parte del código actualiza al pokemon.
window.search.addEventListener('change', async() => {
  const pokemon = await getPokemon(window.search.value)
  updatePokemon(pokemon)
})  


/*
async function getPokemon(id) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${6}/`)
  const data = await response.json()
  return data
}

async function init(){
  console.log(await getPokemon(6))
}
init()
*/