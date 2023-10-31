const axios = require('axios');
require('dotenv').config();

const { API_KEY } = process.env;

async function postValidation(req, res) {


    try {

        const response = await axios.post('https://api.validations.truora.com/v1/validations', {
            type: 'document-validation',
            country: 'CO',
            document_type: 'national-id',
            user_authorized: true,
        },
            {
                headers: {
                    'Truora-API-Key': API_KEY,
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
            });

        const responseData = response.data;

        res.status(200).json(responseData);
    } catch (error) {
        console.error('Error en la solicitud POST:', error);

        res.status(500).json({ error: 'Error en la solicitud POST' });
    }
}

module.exports = postValidation;
