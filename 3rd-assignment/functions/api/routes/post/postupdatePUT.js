const statusCode = require('../../../constants/statusCode');
const responseMessage = require('../../../constants/responseMessage');
const posts = require('../../../dbMockup/post');
const { fail, success } = require('../../../lib/util');

module.exports = async (req, res) => {
    const { id } = req.params;
    const { userId, Newtitle, Newtexts } = req.body;
    const existingPost = posts.filter((post) => post.id === Number(id))[0];
  
   
    if (!existingPost) {
        return res.status(statusCode.BAD_REQUEST).send(fail(statusCode.BAD_REQUEST, responseMessage.NO_POST));
    }
    
    // ������ ���� ����
    if (!userId || !(Newtitle || Newtexts)) {
        return res.status(statusCode.BAD_REQUEST).send(fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }
  
    const updateDate = {
        ...existingPost,
        userId
    };
    res.status(statusCode.OK).send(success(statusCode.OK, responseMessage.UPDATE_POST_SUCCESS, updateDate));
  };