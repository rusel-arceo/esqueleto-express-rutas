const config = require('./config/config.js');
const express = require('express');
const employees = require('./routes/employees');

const app = express();

//routes
employees(app);

app.listen(config.port, () => {
  console.log('config.dev: ', config.dev);  
  console.log(`server listen on port: ${config.port}`);
});
