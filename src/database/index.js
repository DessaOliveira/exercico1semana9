
const Sequelize = require('sequelize')
const connection = new Sequelize({
    dialect:'postgres', // qual banco vai se conectar
    host:'localhost', // onde esta o banco de dados
    username:'postgres', // qual usuario 
    password: '010203', // qual a senha
    port:'5432', //qual a porta
    database:'places_trindade', // qual o nome de dados
    define:{
        timestamps: true,
        underscored:true,
        underscoredAll:true,
    },
});

module.exports = connection;