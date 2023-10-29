const express = require('express');
const router = require('./src/routes/index.js');
const morgan = require('morgan');
const multer = require('multer');
const cors = require('cors');

const server = express();  
const PORT = 3000;

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
      );
      next();
   });
   
   server.use(cors());
   server.use(express.json())
   server.use(express.urlencoded({ extended: true })); 
   server.use(multer().any()); 
   server.use(morgan("dev"))
   server.use("/validator", router); 
   
   
server.listen(PORT, () => {
  console.log(`Server raised in port ${PORT}`);
});



