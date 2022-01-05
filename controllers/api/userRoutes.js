const router = require('express').Router();

router.get("/", async (req, res) => {
    res.json("here")
})

router.post('/login', async (req, res) => {
    try{
        const userData = await User.findOne({ where: { email.req.body.email } });

        if(!userData){
            res
                .status(400)
                .json({message: 'Incorrect email or password, please try again!'})
            return;
        }
    }
})
module.exports = router