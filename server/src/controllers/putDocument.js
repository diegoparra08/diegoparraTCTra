const axios = require('axios');
const fs = require('fs');
const { Readable } = require('stream');


require('dotenv').config();


async function putDocumentFront(req, res) {

  const { front_url } = req.body;
  const file = req.file;
console.log('froooont url', front_url);
 console.log('fileeeellelee',file.name);

  // try {
    // if (!file) {
    //   return res.status(400).json({ message: 'El archivo no se ha proporcionado en el cuerpo de la solicitud.' });
    // }

  //   const imageStream = new Readable();
  //   imageStream._read = () => {};

  //   imageStream.push(file);
  //   imageStream.push(null);

  //   const config = {
  //     headers: {
  //       'Content-Type': file.type, // Utiliza el tipo MIME del archivo proporcionado
  //     },
  //   };

  //   const response = await axios.put(front_url, imageStream, config);
  //   console.log('Aca va la respuestaaaa',response, 'aca termina');
  //   return response.data;

  // } catch (error) {
  //   console.error('Error al cargar la imagen frontal del documento:', error);
  //   throw error;
  // }
}

module.exports = { putDocumentFront } ;








