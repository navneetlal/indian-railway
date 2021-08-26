const trains = require('./data/trains.json')
const fs = require('fs')

const x = {
    ...trains,
    features: trains.features.map(f => ({ type: f.type, properties: f.properties, geometry: f.geometry }))
}
fs.writeFileSync('trains.json', JSON.stringify(x))