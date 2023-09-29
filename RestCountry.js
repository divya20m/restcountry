// fetching the flags of the country using the rest country url
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < data.length; i++) {
      const country = data[i];
      const flags = country.flags.svg;
      console.log(`Flag of ${country.name.common}: ${flags}`);
    }
  })
  .catch(error => console.error('Error fetching data:', error));


//   using the rest country country url to fetch country name regions subregions and populations

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < data.length; i++) {
      const country = data[i];
      const region = country.region
      const subregion=country.subregion
      const populations=country.population
      console.log(`name: ${country.name.common} , region: ${region}, subregion: ${subregion}, poplution: ${populations}`);
    }
  })
  .catch(error => console.error('Error fetching data:', error));