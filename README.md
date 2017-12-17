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

`locations` is an array of `IMVGStation` objects
```TypeScript
id: number,
name: string,
place: string,
products: string[]
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

`routes` is an array of `IMVGRoute` objects
```TypeScript
arrival: number,
departure: number,
ringFrom: number,
ringTo: number,
connectionPartList: IMVGRoutePart[]
```

where `IMVGRoutePart` provides the following information
```TypeScript
arrival: number,
arrivalPlatform: string,
departure: number,
departurePlatform: string,
destination: string,
from: IMVGStation,
to: IMVGStation,
label: string,
product: string,
sev: boolean,
connectionPartType: string
```

### Departures
```JavaScript
MVGAPI.departures(70).then(departures => {
    departures.forEach(departure => {
        console.log(`${departure.product.toUpperCase()}${departure.label} at ${new Date(departure.departureTime)} with direction ${departure.destination}`);
    });
}).catch(err => {
    console.log(`Ups, an error occured: \n ${err}`);
});
```

`departures` is an array of `IMVGDeparture` objects
```TypeScript
departureId: number,
departureTime: number,
destination: string,
label: string,
live: boolean,
product: string,
sev: boolean
```
