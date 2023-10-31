
import React, { useEffect, useState } from 'react';
import axios from "axios";

const ValidationResult = ({ validationId }) => {

    const [result, setResult] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [stillValidating, setStillValidating] = useState(false);

    useEffect(() => {
        if (validationId) {
            const timer = setTimeout(() => {
                handleValidationCheck(validationId);
            }, 120000);

            return () => clearTimeout(timer);
        }

    }, [validationId]);

    const handleVerificationButton = () => {
        handleValidationCheck(validationId)
    }

    const handleValidationCheck = async (Id) => {

        const endpoint = `http://localhost:3000/validator/${Id}`

        try {

            const response = await axios.get(endpoint);
            if (response.status === 200 || response.status === 201) {
                setResult(response.data.message)
            } else if (response.status === 203) {
                setStillValidating(true);
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
                <div>
                    {stillValidating ? (
                        <div>
                            <h2>{result}</h2>
                            <button onClick={handleVerificationButton}>Verificar</button>
                        </div>
                    ) : (
                        <h2>{result}</h2>
                    )}

                </div>
            )}
        </div>
    )
}

export default ValidationResult;