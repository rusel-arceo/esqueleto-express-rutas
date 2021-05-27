const router = require('express').Router();

module.exports = function employees(app) {
  app.use('/', router);
 
  router.get('/', (req, res) => {
    res.status(200).json({
      resp: 'ok',
      mesagge: 'Desde el get',
    });
  });
};
