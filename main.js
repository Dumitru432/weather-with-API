
const body = document.querySelector('body')
const paragraph = document.createElement('p')
const inputElement = document.createElement('input')
body.appendChild(inputElement)
let localTimeElement = document.createElement('p')
let anotherParahraph = document.createElement('p')
let imgElement = document.createElement('img')
const buttonElement = document.createElement('button')
body.appendChild(buttonElement).innerText = 'search'

const changeTemperature = async () => {
    try {
        let verifySpaceofCity = inputElement.value.replace(' ', '%20')
        let temperatureFromApi = await fetch(`http://api.weatherapi.com/v1/current.json?key=ecf800a40a4d499496b194924232903&q=${verifySpaceofCity}&aqi=no`); 
        let convertToJson = await temperatureFromApi.json(); 

        // aici is datele pentru temperatura
        let temperature;
        temperature = convertToJson.current.temp_c
        paragraph.innerText = temperature
        body.appendChild(paragraph).innerText =  `Temperature: ${temperature}`

        // datele pentru ora locala
        let localTime;
        localTime = convertToJson.location.localtime
        localTimeElement.innerHTML = localTime
        body.appendChild(localTimeElement).innerText = `Current time: ${localTime}`

        // date despre conditie meteo sub forma de text 

        let conditionWeather; 
        conditionWeather = convertToJson.current.condition.text
        conditionWeather.innerHTML = anotherParahraph
        body.appendChild(anotherParahraph).innerText = `Condition: ${conditionWeather }`

        // sa punem imagine
       // console.log(convertToJson.current.condition.icon) // acesta este linkul pentru imagine
       let linkForImage = convertToJson.current.condition.icon
       imgElement.setAttribute('src',linkForImage)
       linkForImage.innerHTML = imgElement
       body.appendChild(imgElement) 

       /* let cardWithInformation = `<div class="card text-center">
      <div class="card-header">
        The temperature is: ${temperature}
      </div>

      <div class="card-body">
        <h5 class="card-title">${conditionWeather}</h5>
        <p class="card-text">${imgElement} </p>
      </div>
      <div class="card-footer text-muted">
        ${localTime}
      </div>
      </div>`;

    body.innerHTML = cardWithInformation; */

    } catch (error) {
        console.log(error)
    }

}
buttonElement.addEventListener('click', changeTemperature)


 
 
/* 
 de la Veronica

const body = document.querySelector("body");
const inputElement = document.createElement("input");
body.appendChild(inputElement);
const buttonElement = document.createElement("button");
body.appendChild(buttonElement).innerText = "search";

let imgElement = document.createElement("img");



const changeTemperature = async () => {
  try {
    let verifySpaceofCity = inputElement.value.replace(" ", "%20");
    let temperatureFromApi = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=ecf800a40a4d499496b194924232903&q=${verifySpaceofCity}&aqi=no`
    );
    let convertToJson = await temperatureFromApi.json();
    let localTime = convertToJson.location.localtime;
    let conditionWeather = convertToJson.current.condition.text;
    let linkForImage = convertToJson.current.condition.icon;
    imgElement.setAttribute("src", linkForImage);

    //in acest punct avem info despre: localTime, conditiile si imaginea
    //o data ce le avem gata le bagam in card

    let cardWithInformation = `<div class="card text-center">
      <div class="card-header">
        The temperature is: 
      </div>

      <div class="card-body">
        <h5 class="card-title">${conditionWeather}</h5>
        <p class="card-text">${linkForImage} </p>
      </div>
      <div class="card-footer text-muted">
        ${localTime}
      </div>
      </div>`;

    body.innerHTML = cardWithInformation;
  } catch (error) {
    console.log(error);
  }
};
buttonElement.addEventListener("click", changeTemperature);

 */