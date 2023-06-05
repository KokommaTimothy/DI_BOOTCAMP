
document.addEventListener('DOMContentLoaded', () => {
    let inputBtn = document.querySelector('.btn');
    inputBtn.addEventListener('click', fetchData);
  });

async function fetchData() {

    let loadingElement = document.querySelector('.container');
    loadingElement.innerHTML = '<p>Loading...</p><i class="fa-solid fa-sync fa-spin"></i>';


    let response = await fetch("https://www.swapi.tech/api/people/")
    if (response.status !==200){
        throw new Error("Oh No! That person isnt available.")
    }
    let data = await response.json()
    console.log(data)

    
    let randomIndex = Math.floor(Math.random() * data.results.length);
    let properties = data.results[randomIndex];

   let authorHomeworld = await fetch(properties.url);
   let urlResult = await authorHomeworld.json()
   console.log(urlResult)

   let urlProperties = urlResult.result
   console.log(urlProperties)

   let urlCharacter = urlProperties.properties
   console.log(urlCharacter)

    propertiesInfo(properties, urlCharacter); 

}

function propertiesInfo(properties, urlCharacter){
    let propertiesElement = document.querySelector('.container');

    let author = document.createElement('p');

    let authorHeight = document.createElement('p');

    let autoGender = document.createElement('p');

    let autobirthYear = document.createElement('p');

    let authorHomeworld = document.createElement('p');

    author.textContent = properties.name;

    authorHeight.textContent = 'Height: ' + urlCharacter.height;

    autoGender.textContent = 'Gender: ' + urlCharacter.gender;

    autobirthYear.textContent = 'Birth Year: ' + urlCharacter.birth_year;

    authorHomeworld.textContent = 'Home World: ' + urlCharacter.homeworld;

    propertiesElement.innerHTML = '';
    propertiesElement.appendChild(author);
    propertiesElement.appendChild(authorHeight);
    propertiesElement.appendChild(autoGender);
    propertiesElement.appendChild(autobirthYear);
    propertiesElement.appendChild(authorHomeworld);
}









// let handleData = await data.result.properties

//      let [author, height, gender, birth_year, homeworld] = await Promise.all([
//         (handleData.name),
//         (handleData.height),
//         (handleData.gender),
//         (handleData.birth_year),
//         (handleData.homeworld)
//      ])

//      console.log(author, height, gender, birth_year, homeworld)
// 