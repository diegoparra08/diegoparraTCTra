async function getValidationStatus(req, res){
console.log('hello'); 
return res.status(200).send('all ok')
};

module.exports = getValidationStatus;