const fs = require('fs');
const { Readable } = require('stream');

require('dotenv').config();

async function putDocumentFront(req, res) {

  const { front_url } = req.body;

  try {
    if (!req.file) {
      return res.status(400).json({ message: 'El archivo no se ha proporcionado en el cuerpo de la solicitud.' });
    }

    const fileBuffer = fs.readFileSync(req.file.path);

    const response = await fetch(front_url, {
      method: 'PUT',
      body: fileBuffer, 
      headers: {
        'Content-Type': 'image/jpeg',
      },
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log('Aca va la respuesta luego de cargar las imagenes', responseData);
      return response;
    } else {
      console.error('Error al cargar la imagen frontal del documento:', response.statusText);
      throw new Error(`Error al cargar la imagen frontal del documento: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error al cargar la imagen frontal del documento:', error);
    throw error;
  }
}


async function putDocumentBack(req, res) {
  const { reverse_url } = req.body;

  try {
    if (!req.file) {
      return res.status(400).json({ message: 'El archivo no se ha proporcionado en el cuerpo de la solicitud.' });
    }

    const fileBuffer = fs.readFileSync(req.file.path);

    const response = await fetch(reverse_url, {
      method: 'PUT',
      body: fileBuffer, 
      headers: {
        'Content-Type': 'image/jpeg',
      },
    });

    if (response.ok) {
      const responseData = await response.json(); 
      console.log('Aca va la respuesta del reverse', responseData);
      return response;
    } else {
      console.error('Error al cargar la imagen frontal del documento:', response.statusText);
      throw new Error(`Error al cargar la imagen frontal del documento: ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error al cargar la imagen frontal del documento:', error);
    throw error;
  }
}

module.exports = {putDocumentFront, putDocumentBack};








