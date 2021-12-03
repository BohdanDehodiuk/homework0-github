import pokemonCardTpl from "../templates/pokemon-card.hbs";

const refs = {
  cardContainer: document.querySelector(".js-card-container"),
};

fetchPokemon(2)
  .then(renderPokemonCard)
  .catch((error) => console.log(error));

function fetchPokemon() {
  fetch("https://pokeapi.co/api/v2/pokemon/${pokemonId}").then((response) => {
    return response.json();
  });
}

function renderPokemonCard(pokemon) {
  const markup = pokemonCardTpl(pokemon);
  console.log(markup);
  refs.cardContainer.innerHTML = markup;
}
