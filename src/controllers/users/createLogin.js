const User = require('../../models/users')
async function createLogin(request, response) {
  
    try {
      const userInDatabase = await User.findOne({
        where: {
          username: request.body.username,
        },
      });
      if (!userInDatabase) {
        return response.status(404).json({ message: "Credenciais  invalidas!" });
      }
      const passwordIsValid = await bcrypt.compare(
        request.body.password,
        userInDatabase.password
      );
      if (!passwordIsValid) {
        console.log(error)
        return response
          .status(404)
          .json({ message: "Credenciais incorretas" });
      }
  
      const token = jwt.sign(
  
        {
          id: userInDatabase.id,
        },
        "GUNS_N_ROSES",
        {
          expiresIn: '1h'
        }
      )
      response.json({ username: userInDatabase.username,  token });

    } catch (error) { 

      response
        .status(500)
        .json({ message: "Não conseguimos processar sua solicitação." });
    }
  
  
  };
  module.exports = createLogin
