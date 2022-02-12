const router = require("express").Router()


//login section 

router.get('/', async (req, res) => {
    res.render('login')
})