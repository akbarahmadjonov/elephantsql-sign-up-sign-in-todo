const Router = require('express')
const router = new Router()

const userRouter = require('./userRouter')
const todoRouter = require('./todoRouter')
const swaggerRouter = require('./swagger')

router.use('/user' , userRouter)
router.use('/todo' , todoRouter)
router.use('/api-docs' , swaggerRouter)


module.exports = router