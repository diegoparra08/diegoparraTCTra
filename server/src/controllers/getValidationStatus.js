const { default: axios } = require("axios");
require('dotenv').config();

const { API_KEY } = process.env;

async function getValidationStatus(req, res) {

    const  { data }  = req.body;
    try {
        const response = await axios.get(`https://api.validations.truora.com/v1/validations/${data}`, {
            headers: {
                'Truora-API-Key': API_KEY,
            },
        })
        if (response.status === 200 && response.data.validation_status === 'success') {
            return res.status(200).json({message: 'La validación se ha realizado con éxito y se ha encontrado el documento válido.'})
        } else if (response.status === 200 && response.data.validation_status === 'failure' && response.data.failure_status === 'declined') {
            return res.status(201).json({message: 'La validación se ha realizado con éxito, pero se ha encontrado el documento NO válido.'})
        } else if (response.status === 200 && response.data.validation_status === 'failure' && response.data.failure_status === 'expired') {
            return res.status(201).json({message: 'La validación se ha tomado mucho tiempo y se ha rechazado.'})
        } else if (response.status === 200 && response.data.validation_status === 'failure' && response.data.failure_status === 'system_error') {
            return res.status(201).json({message: 'Ha ocurrido un error en el procesamiento'})
        } else {
            return res.status(404).json({message: 'Ha ocurrido un error en el proceso'})
        }

    } catch (error) {
        console.error('Error en la solicitud:', error);

        res.status(500).json({ error: 'Error en la solicitud' });
    }

};

module.exports = getValidationStatus;