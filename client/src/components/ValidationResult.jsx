
import React, { useEffect, useState } from 'react';
import axios from "axios";

const ValidationResult = ({ validationId }) => {

    const [ result, setResult ] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (validationId) {
            const timer = setTimeout(() => {
                handleValidationCheck(validationId);
            }, 120000); 

            return () => clearTimeout(timer);
        }
        
    }, [validationId]);


    const handleValidationCheck = async (Id) => {

        const endpoint = `http://localhost:3000/validator/${Id}`

        try {

            const response = await axios.get(endpoint);
            if (response.status === 200 || response.status === 201) {
                setResult(response.data.message)
            } else {
                setResult('Se ha producido un error en la solicitud')
            }
        } catch (error) {
            throw new Error('Algo salió mal: ' + error.message)
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div>
           {isLoading ? (
                <h2>Estamos validando tu documento, puede tardar un par de minutos...</h2>
            ) : (
                <h2>{result}</h2>
            )}
        </div>
    )
}

export default ValidationResult;