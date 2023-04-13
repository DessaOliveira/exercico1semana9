const yup = require("yup");

const validation = yup.object().shape({
    name: yup.string("O nome deve ser uma string").required("Nome é obrigatório"),
    username: yup.string("O username deve ser uma string")
    .required("Username é obrigatório"),
    email: yup.string("O email deve ser uma string").required("Email é obrigatório"),
    password: yup 
    .string()
    .min(3, "A senha deve ter no minimo 3 caracteres")
    .required("Senha é obrigatória")
})

function validateNewUser(request, response, next) {
    console.log("Dado original", request.body)

    try {
        validation.validateSync(request.body)
        next()
    } catch (error) {
       response.status(400).json({message:error.message})
    }

   
    
}
module.exports = validateNewUser