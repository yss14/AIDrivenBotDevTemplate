# Simple MVG API
## Usage
### Search for stations
```JavaScript
const MVGAPI = require('mvg-api');

MVGAPI.searchForLocations('Uni').then(locations => {
    locations.forEach(loc => {
        console.log(`Station ${loc.name} with id ${loc.id} in ${loc.place} offers ${loc.products.join(' and ')}`);
    });
}).catch(err => {
    console.log(`Ups, an error occured: \n ${err}`);
});
```