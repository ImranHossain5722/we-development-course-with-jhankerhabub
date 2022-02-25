const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')

    .then(res => res.json())
    .then (data => displayCountries(data))

}

loadCountries()
const displayCountries = data => {

    const countryDiv=document.getElementById('countiresDiv');

   data.forEach(country => {
    const div = document.createElement('div')
    div.classList.add('country')

    div.innerHTML =`<h3> ${country.name}</h3> 
    <p>${country.capital}</p>
    <button onclick="countryDetails('${country.name}')" > Details</button>
    
    `
    countryDiv.appendChild(div);
       
   });

}

const countryDetails = name => {

const url = `https://restcountries.eu/v2/name${name}`
fetch (url)
.then (res => res.json())
.then (data=> displayCountriesDetail(data[0]))

}

const displayCountriesDetail = country => {
const countriesDiv = document.getElementById('sectionDiv')

countriesDiv.innerHTML =`<h4>${country.name}</h4> <P> population:${country.population}</p>
<img width="200px" ser="${country.flag}">
`

} 