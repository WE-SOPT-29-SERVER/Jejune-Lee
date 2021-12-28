const statusCode = require('../../../constants/statusCode');
const responseMessage = require('../../../constants/responseMessage');
const posts = require('../../../dbMockup/post');
const { fail, success } = require('../../../lib/util');

module.exports = async (req, res) => {
    const { id } = req.params;
  
    const existingPost = posts.filter((post) => post.id === Number(id))[0];
    if (!existingPost) {
      return res.status(statusCode.BAD_REQUEST).send(fail(statusCode.BAD_REQUEST, responseMessage.NO_POST));
    }
  
    res.status(statusCode.OK).send(success(statusCode.OK, responseMessage.GET_POST_SUCCESS, existingPost));
  };