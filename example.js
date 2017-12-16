const MVGAPI = require('./index');

//Search for stations
MVGAPI.searchForLocations('Uni').then(locations => {
    locations.forEach(loc => {
        console.log(`Station ${loc.name} with id ${loc.id} in ${loc.place} offers ${loc.products.join(' and ')}`);
    });
}).catch(err => {
    console.log(`Ups, an error occured: \n ${err}`);
});