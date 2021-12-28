const users = require("../../dbMockup/user");
const util = require("../../lib/util");
const responseMessage = require("../../constants/responseMessage");
const statusCode = require("../../constants/statusCode");

module.exports = async (req, res) => {
    

    // const email = req.body.email;
    // const name = req.body.name;
    // const password = req.body.password;

    const { email, name, password } = req.body;
    
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

};