import React, { useState } from 'react';
import axios from 'axios';

import ValidationResult from './ValidationResult'

import './FileUploader.css'

const FileUploader = ({ front_url, reverse_url, setValidationStage, validationStage, validationId }) => {

    const [selectedFileFront, setSelectedFileFront] = useState(null);
    const [selectedFileBack, setSelectedFileBack] = useState(null);
    const [imagePreviewFront, setImagePreviewFront] = useState(null);
    const [imagePreviewBack, setImagePreviewBack] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const isButtonDisabled = !selectedFileFront || !selectedFileBack;


    const handleFileChangeFront = (event) => {
        const file = event.target.files[0];
        setSelectedFileFront(file);

        if (file) {
            const objectURL = URL.createObjectURL(file);
            setImagePreviewFront(objectURL);
        }
    };
    const handleFileChangeBack = (event) => {
        const file = event.target.files[0];
        setSelectedFileBack(file);

        if (file) {
            const objectURL = URL.createObjectURL(file);
            setImagePreviewBack(objectURL);
        }
    };

    const handleUpload = async () => {
        if (!selectedFileFront || !selectedFileBack) {
            alert('Por favor, selecciona un archivo.');
            return;
        }

        try {
            const dataToSendFront = new FormData();
            dataToSendFront.append('file', selectedFileFront);
            dataToSendFront.append('front_url', front_url);

            const dataToSendBack = new FormData();
            dataToSendBack.append('file', selectedFileBack);
            dataToSendBack.append('reverse_url', reverse_url);

            const endpointFront = 'http://localhost:3000/validator/front';
            const endpointBack = 'http://localhost:3000/validator/back';


            const [responseFront, responseBack] = await Promise.all([
                axios.put(endpointFront, dataToSendFront),
                axios.put(endpointBack, dataToSendBack)
            ]);

            setTimeout(() => {
                setShowResult(true);
            }, 120000);
            console.log('res front', responseFront);
            console.log('res back', responseBack);


        } catch (error) {
            console.error('Error al subir el archivo:', error);
        }
    };

    const handleValidation = () => {
        setShowResult(!showResult)

    }


    return (
        <div>

            {showResult === false &&

                <div>
                    <h3>Por favor, carga una foto de tu documento por la parte frontal y luego la parte trasera. Por favor, asegúrate de que tu documento esté orientado horizontalmente.</h3>
                    <div className='select-picture'>
                        <div>
                            <h3>Parte Frontal</h3>
                            <input type="file" onChange={handleFileChangeFront} className='centrar-input' accept=".jpeg, .jpg, .png, image/jpeg, image/jpg, image/png" />
                            {imagePreviewFront === null && <img src="https://i.pinimg.com/564x/a0/62/d1/a062d187495d69ad2014696bfa088d6a.jpg" alt="user icon" />}
                            {imagePreviewFront && <img src={imagePreviewFront} alt="Vista previa de la imagen" />}
                        </div>
                        <div>
                            <h3>Parte Trasera</h3>
                            <input type="file" onChange={handleFileChangeBack} className='centrar-input' accept=".jpeg, .jpg, .png, image/jpeg, image/jpg, image/png" />
                            {imagePreviewBack === null && <img src="https://i.pinimg.com/564x/a0/62/d1/a062d187495d69ad2014696bfa088d6a.jpg" alt="user icon" />}
                            {imagePreviewBack && <img src={imagePreviewBack} alt="Vista previa de la imagen" />}
                        </div>

                    </div>

                    <button onClick={() => {
                        handleUpload();
                        handleValidation();
                    }}
                        disabled={isButtonDisabled}>Subir Archivo</button>
                </div>
            }

            {showResult === true && (
                <ValidationResult validationId={validationId} />
            )}
        </div>
    );
}

export default FileUploader;

