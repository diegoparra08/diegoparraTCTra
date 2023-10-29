import React, { useState } from 'react';
import axios from 'axios';

import './FileUploader.css'

function FileUploader({ front_ulr }) {

    console.log('a ver si pasa', front_ulr);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };
    console.log('file', selectedFile);


    const handleUploadFront = async () => {
        if (!selectedFile) {
            alert('Por favor, selecciona un archivo.');
            return;
        }

        // const formData = new FormData();
        // formData.append('file', selectedFile);


        try {
            const endpoint = 'http://localhost:3000/validator/front';

            const dataToSend = new FormData();
            dataToSend.append('file', selectedFile);
            dataToSend.append('front_url', front_ulr);
            console.log('este es el data to send', dataToSend);

            const response = await axios.put(endpoint, dataToSend,
                //  {
                // headers: {
                //     'Content-Type': 'multipart/form-data',
                // },
          // }
            );
            alert('Archivo subido exitosamente.');
            console.log(response);
        } catch (error) {
            console.error('Error al subir el archivo:', error);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} className='centrar-input' accept=".jpeg, .jpg, .png, image/jpeg, image/jpg, image/png" />
            <button onClick={handleUploadFront}>Subir Archivo</button>
        </div>
    );
}

export default FileUploader;
