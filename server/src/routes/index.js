const { Router } = require('express')

// const postValidation = require('../controllers/postValidation');
const getValidationStatus = require('../controllers/getValidationStatus');
// const putDocument = require('../controllers/putDocument');

const router = Router();

// router.post('/', postValidation);
router.get('/', getValidationStatus);
// router.put('/', putDocument);

module.exports = router;
