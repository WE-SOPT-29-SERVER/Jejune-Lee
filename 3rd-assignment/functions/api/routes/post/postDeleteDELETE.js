const statusCode = require('../../../constants/statusCode');
const responseMessage = require('../../../constants/responseMessage');
const posts = require('../../../dbMockup/post');
const { fail, success } = require('../../../lib/util');

module.exports = async (req, res) => {
    const { id } = req.params;
    const { userId } = req.body;
  
    
    if (!userId) {
      return res.status(statusCode.BAD_REQUEST).send(fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }
  
    const existingPost = posts.filter((post) => post.id === Number(id))[0];
    if (!existingPost) {
      return res.status(statusCode.BAD_REQUEST).send(fail(statusCode.BAD_REQUEST, responseMessage.NO_POST));
    }
  
    
    if (existingPost.userId !== Number(userId)) {
      return res.status(statusCode.FORBIDDEN).send(fail(statusCode.FORBIDDEN, responseMessage.FORBIDDEN));
    }
  
    const filterdata = posts.filter((post) => post.id !== Number(id));
  
    res.status(statusCode.OK).send(success(statusCode.OK, responseMessage.DELETE_POST_SUCCESS, filterdata));
  };