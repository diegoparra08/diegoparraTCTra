import axios from 'axios';
import { useState } from 'react';

import FileUploader from '/src/components/FileUploader.jsx'
import './Documents.css'

const DocumentValidation = () => {

    const [data, setData] = useState({
        type: '',
        country: '',
        document_type: '',
        user_authorized: true
    });
    const [validationStage, setValidationStage] = useState(0);
    const [front_url, setFront_url] = useState('');


    console.log(data);

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setData({
            ...data,
            [name]: value,
        });

    }

    const handlePostRequest = async () => {

        try {
            const endpoint = 'http://localhost:3000/validator/'

            const response = await axios.post(endpoint, data);
            setFront_url(response.data.instructions.front_url)
            console.log(response.data);
            setValidationStage(1)

        } catch (error) {
            throw new Error('Algo salió mal: ' + error.message)
        }

    };



    return (
        <div>

            {validationStage === 0 && (
                <div>
                    <h1>¡Validemos tu documento!</h1>
                    <h3>Responde las preguntas para comenzar</h3>

                    <label htmlFor="type">Selecciona el tipo de validación</label>
                    <select name='type' value={data.type} onChange={handleInputChange} required className='centrar-select'>
                        <option value="">Selecione una opción</option>
                        <option value="document-validation">Validación de documento</option>
                    </select>

                    <label htmlFor="country">Selecciona el país</label>
                    <select name='country' value={data.country} onChange={handleInputChange} required className='centrar-select'>
                        <option value="">Selecione una opción</option>
                        <option value="CO">Colombia</option>
                        <option value="CL">Chile</option>
                        <option value="MX">México</option>
                    </select>

                    <label htmlFor="document_type">Selecciona el tipo de documento</label>
                    <select name='document_type' value={data.document_type} onChange={handleInputChange} required className='centrar-select'>
                        <option value="">Selecione una opción</option>
                        <option value="national-id ">Identificación Nacional</option>
                        <option value="passport">Pasaporte</option>
                        <option value="foreign-id">Identificación Extranjera </option>
                        <option value="pep">PEP</option>
                        <option value="pep">PPT</option>
                        <option value="driver-license">Licencia de Conducción</option>
                        <option value="invoice">Factura</option>
                        <option value="identity-card">Tarjeta de Identidad</option>
                    </select>

                    <button onClick={handlePostRequest}>Comenzar validación</button>
                </div>
            )}

            {validationStage === 1 && (
                <div>
                    <p>Por favor, carga una foto de tu documento por la parte frontal. Por favor, asegúrate de que tu documento esté orientado horizontalmente.</p>
                    <FileUploader front_ulr={front_url} />
                </div>
            )}

        </div>
    );
}

export default DocumentValidation;