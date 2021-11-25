const statusCode = require('../../../constants/statusCode');
const responseMessage = require('../../../constants/responseMessage');
const posts = require('../../../dbMockup/post');
const { fail, success } = require('../../../lib/util');


module.exports = async (req, res) => {
    res.status(statusCode.OK).send(success(statusCode.OK, responseMessage.GET_POST_SUCCESS, posts));
  };