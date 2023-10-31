// const axios = require('axios');
// const fs = require('fs');
// const { Readable } = require('stream');


// require('dotenv').config();


// async function putDocumentFront(req, res) {

//   const { front_url } = req.body;
//   console.log(req.file);

//   try {
//     if (!req.file) {
//       return res.status(400).json({ message: 'El archivo no se ha proporcionado en el cuerpo de la solicitud.' });
//     }

//     const imageStream = new Readable();
//     imageStream._read = () => { };

//     const fileBuffer = fs.readFileSync(req.file.path);
//     imageStream.push(fileBuffer);
//     imageStream.push(null);


//     const response = await axios.put(front_url, imageStream, 
//       {
//       headers: {
//         'Content-Type': 'image/jpeg',
//       }
//     }
//     );

//     console.log('Aca va la respuestaaaa', response.data, 'aca termina');
//    return response;

//   } catch (error) {
//     console.error('Error al cargar la imagen frontal del documento:', error);
//     throw error;
//   }

// }


// async function putDocumentBack(req, res) {

//   const { reverse_url } = req.body;
//   console.log(req.file);

//   try {
//     if (!req.file) {
//       return res.status(400).json({ message: 'El archivo no se ha proporcionado en el cuerpo de la solicitud.' });
//     }

//     const imageStream = new Readable();
//     imageStream._read = () => { };

//     const fileBuffer = fs.readFileSync(req.file.path);
//     imageStream.push(fileBuffer);
//     imageStream.push(null);


//     const response = await axios.put(reverse_url, imageStream, {
//       headers: {
//         'Content-Type': 'image/jpeg',
//       }
//     });

//     console.log('Aca va la respuesta back', response.data, 'aca termina');
//    return response;

//   } catch (error) {
//     console.error('Error al cargar la imagen trasera del documento:', error);
//     throw error;
//   }

// }
// module.exports = { putDocumentFront, putDocumentBack };

const axios = require('axios');
const fs = require('fs');
const { Readable } = require('stream');
// const fetch = require('node-fetch'); // Importar fetch

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
      body: fileBuffer, // Usar el archivo como cuerpo de la solicitud
      headers: {
        'Content-Type': 'image/jpeg',
      },
    });

    if (response.ok) {
      const responseData = await response.json(); // O procesa la respuesta como corresponda
      console.log('Aca va la respuestaaaa', responseData, 'aca termina');
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
      body: fileBuffer, // Usar el archivo como cuerpo de la solicitud
      headers: {
        'Content-Type': 'image/jpeg',
      },
    });

    if (response.ok) {
      const responseData = await response.json(); // O procesa la respuesta como corresponda
      console.log('Aca va la respuestaaaa', responseData, 'aca termina');
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








