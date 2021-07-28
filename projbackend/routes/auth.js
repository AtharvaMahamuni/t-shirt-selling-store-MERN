var express = require('express');
var router = express.Router();

const { signout, signup, signin } = require("../controllers/auth");
// const { body, validationResult } = require('express-validator');
const { check } = require('express-validator');


router.post("/signup", [
        check("name", "Name should be at least 3 char").isLength({ min:3 }),
        check("email", "email is required").isEmail(),
        check("password", "password is should be at least 3 char").isLength({ min: 3 })
    ],
    signup
);


router.post("/signin", [
        check("email", "email is required").isEmail(),
        check("password", "password is should be at least 3 char").isLength({ min: 1 })
    ],
    signin
);


router.get("/signout", signout);

module.exports = router;