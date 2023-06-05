document.addEventListener('DOMContentLoaded', () => {
    let btn = document.querySelector('.random-btn');
    btn.addEventListener('click', fetchPokemonData);
  });

  
    let previousBtn = document.querySelector('#previous');
    previousBtn.addEventListener('click', fetchPreviousData);
  
    let nextBtn = document.getElementById('next');
    nextBtn.addEventListener('click', fetchNextData);
  



  async function fetchPokemonData(){
    let loadingElement = document.querySelector('.pokemon-data');
    loadingElement.innerHTML = '<p>Loading...</p><img src="http://www.complicite.org/_images/loading.gif" width=100 height=100 alt="http://www.complicite.org/_images/loading.gif" class="transparent">';

    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
    if (response.status !==200){
        throw new Error("Oh no! That Pokemon isnt available…");
    }
    let data = await response.json();
    console.log(data)


    let randomIndex = Math.floor(Math.random() * data.results.length);
    let characters = data.results[randomIndex];

    let pokeCharacters = await fetch(characters.url);
    let urlResult = await pokeCharacters.json()
    console.log(urlResult)

    let pokemonTypes = await urlResult.types
   console.log(pokemonTypes)

   let pokemon_type = await pokemonTypes[0].type
   console.log(pokemon_type)

   let pokemonImage = await urlResult.sprites.front_default
   console.log(pokemonImage)

   charactersInfo(characters, urlResult, pokemon_type, pokemonImage)
  }
  
  function charactersInfo(characters, urlResult, pokemon_type, pokemonImage){
    let characterElement = document.querySelector('.pokemon-data');

    let image = document.createElement('img');

    image.setAttribute('src', pokemonImage);
    image.setAttribute("width", "200px")

    let name = document.createElement('p');

    let id = document.createElement('p');

    let height = document.createElement('p');

    let weight = document.createElement('p');

    let type = document.createElement('p');

    name.textContent = 'Name: ' + characters.name;

    id.textContent = 'Id: ' + urlResult.id;

    height.textContent = 'Height: ' + urlResult.height;

    weight.textContent = 'Weight: ' + urlResult.weight;

    type.textContent = 'Type: ' + pokemon_type.name;

    characterElement.innerHTML = '';
    characterElement.appendChild(image);
    characterElement.appendChild(name);
    characterElement.appendChild(id);
    characterElement.appendChild(height);
    characterElement.appendChild(weight);
    characterElement.appendChild(type);

  }

  async function fetchPreviousData() {
    await fetchPokemonData('--');

  }

  async function fetchNextData() {
    await fetchPokemonData('++');
  }
