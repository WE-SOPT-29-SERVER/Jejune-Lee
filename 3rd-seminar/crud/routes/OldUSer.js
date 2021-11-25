const express = require("express");
const router = express.Router()
const users = require("./../dbMockup/user");
const util = require("../lib/util");
const responseMessage = require("../constants/responseMessage");
const statusCode = require("../constants/statusCode");

router.post("/signup", (req, res) => {

    // const email = req.body.email;
    // const name = req.body.name;
    // const password = req.body.password;

    const { email, name, password } = req.body;
    
    //requset body가 잘못됐을 때
    if(!email || !name || !password) {
        return res
        .status(statusCode.BAD_REQUEST)
        .send(
            util.fail(
                statusCode.BAD_REQUEST, 
                responseMessage.NULL_VALUE,
            ),
        );
    }
    const alreadyUser = users.filter(obj => obj.email === email).length > 0;
    
    //해당 email를 가진 유저가 이미 있을 때
    if(alreadyUser){
        return res
        .status(statusCode.BAD_REQUEST)
        .send(
            util.fail(
                statusCode.BAD_REQUEST, 
                responseMessage.ALREADY_EMAIL,
            ),
        );
    }

    const newUser = { 
        id: users.length + 1,
        name,
        password,
        email,
    };
    res.status(statusCode.OK).send(
        util.success(statusCode.OK, responseMessage.CREATED_USER, newUser),
    );
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    if(!email || !password){
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE),
        );
    }
    const user = users.filter(user => user.email === email)[0];
    if(!user){
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER),
        );
    }
    if(user.password !== password){
        return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.MISS_MATCH_PW),
        )
    }
    res.status(statusCode.OK).send(
        util.success(statusCode.OK, responseMessage.LOGIN_SUCCESS, {
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
            },
        }),
    );
});

module.exports = router;