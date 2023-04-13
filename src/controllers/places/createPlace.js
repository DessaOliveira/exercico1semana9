const Place = require('../../models/place')
async function createPlace (request, response) {
    try {
      const place = {
        name: request.body.name,
        contact: request.body.contact,
        opening_hours: request.body.opening_hours,
        description: request.body.description,
        latitude: request.body.latitude,
        longitude: request.body.longitude,
      };
  
      const newPlace = await Place.create(place);
      response.status(201).json(newPlace);
    } catch (error) { console.log(error)
         response
        .status(500)
        .json({ message: "Não foi possivel concluir a operação" });        
    
    }
  };
  module.exports= createPlace