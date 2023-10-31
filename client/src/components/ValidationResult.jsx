
import React, { useEffect, useState } from 'react';
import axios from "axios";

const ValidationResult = ({ validationId }) => {

    const [ result, setResult ] = useState('');

    useEffect(() => {
        if (validationId) {
            handleValidationCheck(validationId);
        }
    }, [validationId]);


    const handleValidationCheck = async () => {

        const endpoint = 'http://localhost:3000/validator/'

        try {

            const response = await axios.get(endpoint, {
                data: { validationId }
            });
            if (response.status === 200 || response.status === 201) {
                setResult(response.data.message)
            } else {
                setResult('Se ha producido un error en la solicitud')
            }
        } catch (error) {
            throw new Error('Algo salió mal: ' + error.message)
        }
    }

    return (
        <div>
            <h2>{result}</h2>
        </div>
    )
}

export default ValidationResult;