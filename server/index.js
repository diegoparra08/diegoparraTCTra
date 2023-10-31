const express = require('express');
const bodyParser = require('body-parser');
const router = require('./src/routes/index.js');
const morgan = require('morgan');
const multer = require('multer');
const cors = require('cors');

const server = express();
const PORT = 3000;

server.use(cors());

server.use(express.json())
server.use(morgan("dev"))
server.use("/validator", router);



server.listen(PORT, () => {
  console.log(`Server raised in port ${PORT}`);
});



