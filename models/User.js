const Sequelize = require("Sequelize")
const db = require("../database/db.js")

module.exports = db.sequelize.define(
   'user',
   {
      id : {
          type: Sequelize.INTEGER,
          primaryKey:true
      },
      login : {
        type: Sequelize.STRING
      },
      email : {
        type: Sequelize.STRING
      },
      password : {
        type: Sequelize.STRING
      },
      created : {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }

   },
   {
       timestamps: false
   }

)