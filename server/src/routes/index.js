const { Router } = require('express')
const multer = require('../../multer.config');

const postValidation = require('../controllers/postValidation');
const getValidationStatus = require('../controllers/getValidationStatus');
const { putDocumentFront } = require('../controllers/putDocument');

const router = Router();

router.post('/', postValidation);
router.get('/', getValidationStatus);
// router.put('/', putDocument);
router.put('/front', multer.single('file'), putDocumentFront);


module.exports = router;

