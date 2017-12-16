const axios = require('axios');

const API_URL = 'https://www.mvg.de/fahrinfo/api/';
const API_KEY = '5af1beca494712ed38d313714d4caff6';

const api = axios.create({
    baseUrl: API_URL,
    headers: {
        'X-MVG-Authorization-Key': API_KEY
    }
});

module.exports.searchForLocations = function (query) {
    if (query.trim().length === 0) {
        throw new Error("query param has zero length");
    }

    return new Promise((resolve, reject) => {
        api.get(`${API_URL}location/queryWeb?q=uni`).then(response => {
            const locations = response.data.locations.filter(loc => loc.type === 'station').map(loc => {
                return {
                    id: loc.id,
                    name: loc.name,
                    place: loc.place,
                    products: loc.products
                }
            });

            resolve(locations);
        }).catch(err => {
            reject(err);
        });
    });
}

