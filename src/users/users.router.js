const router = require('express').Router()
const passport = require ('../middleware/auth.middleware')

const userServices = require('./users.services')

router.get("/", userServices.getAllUsers)
router.post("/", userServices.postUser) 

router.get("/:id", userServices.getUserById) 
router.patch('/:id', passport.authenticate('jwt',{session:false}) , userServices.patchUser) //? /api/v1/users/:id
router.delete('/:id',passport.authenticate('jwt',{session:false}) , userServices.deleteUser) //? /api/v1/users/:id

module.exports = router