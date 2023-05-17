function filterPokemon() {
  let idInput = document.getElementById('id')
  let nameInput = document.getElementById('nom')
  let typeSelect = document.getElementById('type')

  let id = idInput.value.trim()
  let name = nameInput.value.trim()
  let type = typeSelect.value

  fetch('pokemon.json')
    .then(response => response.json())
    .then(data => {
      const filteredPokemon = data.filter(pokemon => {
        if (id && pokemon.id !== id) {
          return false;
        }
        if (name && !pokemon.name.toLowerCase().includes(name.toLowerCase())) {
          return false;
        }
        if (type && !pokemon.type.includes(type)) {
          return false;
        }
        return true;
      });

      displayPokemon(filteredPokemon);
    })
    .catch(error => {
      console.log('Une erreur s\'est produite:', error);
    });
}

function displayPokemon(pokemonList) {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '';

  if (pokemonList.length === 0) {
    resultDiv.innerText = 'Aucun Pokémon ne correspond aux critères de recherche.';
    return;
  }

  const ul = document.createElement('ul');

  pokemonList.forEach(pokemon => {
    const li = document.createElement('li');
    li.innerText = `ID: ${pokemon.id}, Nom: ${pokemon.name}, Type: ${pokemon.type.join(', ')}`;
    ul.appendChild(li);
  });

  resultDiv.appendChild(ul);
}