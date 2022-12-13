const checkUserCredentials = require('./auth.controller')
const jwt = require('jsonwebtoken')

const postLogin = (req,res) => {
    const {email,password} = req.body
    if(email && password ){
        checkUserCredentials(email,password)
            .then((data) => {
                if(data){
                    const token = jwt.sign({
                        id : data.id,
                        email: data.email,
                        role: data.role
                    },'hola')
                    res.status(200).json({token})
                }else{
                    res.status(401).json({message:'Invalid Credentials'})
                }
            })
            .catch((err) => {
                res.status(400).json({message:err.message})
            })
    }else{
                res.status(400).json({message:'Missing Data',fields:{email:'example@mail.com', password:'pass123'}})
    }    
}

module.exports = postLogin