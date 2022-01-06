const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { user } = require('../dataBase/db');
const { check, validationResult } = require('express-validator');
const moment = require('moment');
const jwt = require('jwt-simple');
const sendgrid = require('@sendgrid/mail');
const { response } = require('express');



const sendgridApiKey = 'SG.vMCPjJ3WSqSj46D3.X9FK-gPTJ8dj6ArV8FQCoWGpbrdGtLvaVA';
sendgrid.setApiKey(sendgridApiKey)




router.post('/register', [
    check('username', 'Name required').not().isEmpty(),
    check('email', 'Email must be ok').isEmail(),
    check('password', 'Password required').not().isEmpty()
], async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    };

    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const userR = await user.create(req.body);
    res.json(userR);


    const email = req.body.email;
    const message = {
        to: email,
        from: {
            name: 'API DISNEY ALKEMY!',
            email: 'email@gmail.com'
        },
        subject: "This is the wonderful world of disney!!",
        text: "This is the wonderful world of disney!!",
        html: "<h1>This is the wonderful world of disney!!</h1>"
    };

    sendgrid.send(message)
        .then((response) => console.log('Email sent...'))
        .catch((error) => console.log(error.message));
    

});



router.post('/login', async (req, res) => {
    const userR = await user.findOne({ where: { email: req.body.email } });
    if (userR) {
        const equals = bcrypt.compareSync(req.body.password, userR.password);
        if (equals) {
            res.json({ success: createToken(userR) });
        } else {
            res.json({ error: 'Wrong username/password.' });
        }
    } else {
        res.json({ error: 'Wrong username/password.' });
    }
});



const createToken = (user) => {
    const payload = {
        userId: user.id,
        createdAt: moment().unix(),
        expiredAt: moment().add(2, 'minutes').unix()
    }
    return jwt.encode(payload, 'keyword');
}

module.exports = router;