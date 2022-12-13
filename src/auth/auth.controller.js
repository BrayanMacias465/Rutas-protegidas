const {findUserByEmail} = require('../users/users.controllers')
const {comparedPassword} = require('../utils/crypto')


const checkUserCredentials = async(email,password) => {
    try{
        const user = await findUserByEmail(email)
        const verifyPassword = comparedPassword(password,user.password)
        if(verifyPassword){
            return user
        }
            return null
    }catch(error){
            return null
    }
    
}

module.exports = checkUserCredentials