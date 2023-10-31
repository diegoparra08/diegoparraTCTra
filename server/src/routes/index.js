const { Router } = require('express')
const upload = require('../../multer.config');

const postValidation = require('../controllers/postValidation');
const getValidationStatus = require('../controllers/getValidationStatus');
const { putDocumentFront, putDocumentBack } = require('../controllers/putDocument');

const router = Router();

router.post('/', postValidation);
router.get('/', getValidationStatus);

router.put('/front', upload.single('file'), putDocumentFront);
router.put('/back', upload.single('file'), putDocumentBack);



module.exports = router;

