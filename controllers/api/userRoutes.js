const router = require('express').Router();

router.get("/", async (req, res) => {
    res.json("here")
})

router.post('/login', async (req, res) => {
    try{
        const userData = await User.findOne({ where: { } });

        if(!userData) {
            res.status(400)
                .json({message: 'Incorrect email or password, please try again!'})
            return;
        }
    } catch(err) {
        console.log(err)
    }
})

module.exports = router