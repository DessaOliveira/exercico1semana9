const express = require("express");
const connection = require("./src/database");
const Place = require("./src/models/place");

const app = express();
app.use(express.json());

connection.authenticate();
connection.sync({ alter: true });

app.post("/places", async (request, response) => {
  try {
    const data = {
      name: request.body.name,
      contact: request.body.contact,
      opening_hours: request.body.opening_hours,
      description: request.body.description,
      latitude: request.body.latitude,
      longitude: request.body.longitude,
    };

    const place = await Place.create(data);
    response.status(201).json(place);
  } catch (error) { console.log(error)
    response
      .status(500)
      .json({ message: "Não foi possivel concluir a operação" });
  }
});

app.get('/places', async (request,response)=>{
   try {
    const places = await Place.findAll()
    return response.json(places)
   } catch (error) {
   
   } 
})
app.delete("/places/:id", async (request, response) => {
    try {
      await Place.destroy({
        where: {
          id: request.params.id,
        },
      });
  
      response.status(200).json({ message: "deletado com sucesso" });
   
    } catch (error) {
      response
        .status(500)
        .json({ message: "Não conseguimos processar sua solicitação." });
    }
  });



app.listen(9999, () => {
  console.log("Servidor online");
});
