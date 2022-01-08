const router = require("express").Router();
const moment = require("moment");
const { user } = require("../dataBase/db");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jwt-simple");
const sgMail = require("@sendgrid/mail");
const { response } = require("express");
require("dotenv").config


  
sgMail.setApiKey(process.env.API_KEY);

router.post(
  "/register",
  [
    check("username", "need the name").not().isEmpty(),
    check("email", "wrong email").isEmail(),
    check("password", "need the password").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const userR = await user.create(req.body);
    res.json(userR);

    const email = req.body.email;
    const message = {
      to: email,
      from: {
        name: "API challenge",
        email: "email@gmail.com",
      },
      subject: "This is the wonderful world of disney!!",
      text: "This is the wonderful world of disney!!",
      html:'<h1>This is the wonderful world of disney!!<h1/>',
    };

    sgMail
      .send(message)
      .then((response) => console.log("Email sent..."))
      .catch((error) => console.log(error.message));
  }
);

router.post("/login", async (req, res) => {
  const userR = await user.findOne({ where: { email: req.body.email } });
  if (userR) {
    const equals = bcrypt.compareSync(req.body.password, userR.password);
    if (equals) {
      res.json({ congrats: createToken(userR) });
    } else {
      res.json({ error: " Enter a wrong username or password." });
    }
  } else {
    res.json({ error: "Enter a Wrong username or password." });
  }
});

const createToken = (user) => {
  const payload = {
    userId: user.id,
    createdAt: moment().unix(),
    expiredAt: moment().add(10, "minutes").unix(),
  };
  return jwt.encode(payload, "keyword");
};

module.exports = router;
