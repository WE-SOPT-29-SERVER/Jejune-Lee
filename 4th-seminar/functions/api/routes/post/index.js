const express = require('express');
const router = express.Router();

router.get('/all', require('./postAllPOST'));
router.get('/:id', require('./postGetbyidGET'));
router.post('/newpost', require('./postNewPOST'));
router.put('/:id', require('./postupdatePUT'));
router.delete('/:id', require('./postDeleteDELETE'));

module.exports = router;