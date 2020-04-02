const express = require("express")
const users = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const User = require("../models/User")
users.use(cors())

process.env.SECRET_KEY = 'secret'


//register
users.post('/register',(req,res) => {
  const today = new Date()
  const userData = {
      login: req.body.login,
      email: req.body.email,
      password: req.body.password,
      created: today,
  }

  User.findOne({
            where:{login: req.body.login}
  })
  .then(user =>{
   if(!user){
       let hash = bcrypt.hashSync(userData.password,10)
       userData.password = hash
       User.create(userData)
       .then(user =>{
        let token = jwt.sign(user.dataValues,process.env.SECRET_KEY, {
            expiresIn:1440
        })
         res.json({token:token})
       })
       .catch(err =>{
           res.send('error: ' + err)
       })
   }
   else{
       res.json({error: "User already exists: " + user })
   }

  })
  .catch(err =>{
    res.send('error: ' + err)
})

})

users.post("/login", (req,res)=> {
   const userData = {
       login: req.body.login,
       password: req.body.password
   }

   User.findOne({
       where:[
           {login: req.body.login}
       ]
   })
   .then(user =>{
     if(user){
         let pass = bcrypt.compareSync(req.body.password,user.password)
        
            if(pass){
                let token = jwt.sign(user.dataValues,process.env.SECRET_KEY,{
                    expiresIn:1440
                })
                res.json({token:token})
            }else{
                res.send("wrong password")
            }
        }else{
                res.send("User does not exist")
        }
       })
        .catch(err =>{
        res.send("error: " + err)
        }) 

   })

module.exports = users