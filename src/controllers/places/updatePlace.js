const Place = require('../../models/place')
async function updatePlace(request, response) {
    try {
      const placeInDatabase = await Place.findByPk(request.params.id); 
  
      if (!placeInDatabase) {
        return response.status(404).json({ message: "Solicitação não encontrada" });
      }
  
      placeInDatabase.contact = request.body.contact;
      placeInDatabase.description = request.body.description;
  
      await placeInDatabase.save(); 
  
      response.json(placeInDatabase);
    } catch (error) {
      console.log(error);
      response
        .status(500)
        .json({ message: "Não conseguimos processar sua solicitação." });
    }
  };
  module.exports = updatePlace