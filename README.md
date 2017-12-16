# Simple MVG API
## Installation
```bash
npm install --save mvgapi
```
## Usage
### Search for stations
```JavaScript
const MVGAPI = require('mvgapi');

MVGAPI.searchForLocations('Uni').then(locations => {
    locations.forEach(loc => {
        console.log(`Station ${loc.name} with id ${loc.id} in ${loc.place} offers ${loc.products.join(' and ')}`);
    });
}).catch(err => {
    console.log(`Ups, an error occured: \n ${err}`);
});
```

### Routes
```JavaScript
MVGAPI.route(70, 438).then(routes => {
    routes.forEach((route, idx) => {
        console.log(`Route ${1} departure ${new Date(route.departure)} arrives at ${new Date(route.arrival)} using
            ${route.connectionPartList.map(part => `${part.product !== undefined ? (part.product.toUpperCase() + part.label) : 'Footway'}`).join(' and ')}`);
    });
}).catch(err => {
    console.log(`Ups, an error occured: \n ${err}`);
});
```