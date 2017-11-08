const express = require('express');
const path = require('path');
const server = express();

server.use(express.static(path.join(__dirname, 'build')));

server.listen(process.env.PORT || 8080, () => {
  console.log('I am now listen on the available port');
});
