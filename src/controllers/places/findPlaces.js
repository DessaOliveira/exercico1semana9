const Place = require('../../models/place')
async function findPlaces(request,response){
    try {
     const places = await Place.findAll()
     return response.json(places)
    } catch (error) {
    
    } 
 }
 module.exports = findPlaces