const statusCode = require('../../../constants/statusCode');
const responseMessage = require('../../../constants/responseMessage');
const posts = require('../../../dbMockup/post');
const { fail, success } = require('../../../lib/util');

module.exports = async (req, res) => {
    const { userId, title, texts } = req.body;
  
    if (!userId || !title || !texts) {
      return res.status(statusCode.BAD_REQUEST).send(fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }
  
    const newPostData = {
        id: posts.length + 1,
        title,
        texts,
        userId,
    }
    posts.push(newPostData);
    res.status(statusCode.OK).send(success(statusCode.OK, responseMessage.WRITE_POST_SUCCESS, newPostData));
  };