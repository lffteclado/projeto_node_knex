var express = require('express');
var apiRouterV2 = express.Router();

const knex = require('knex')(require('../knexfile').development);


apiRouterV2.get('/produtos', function (req, res, next) {
  knex('produtos').select('*').then(produtos => {
    res.status(200).json(produtos);
  }).catch(err => {
    res.status(500).json({erro: err});
  });
});

apiRouterV2.get('/produtos/:id', function (req, res, next) {
  let id = req.params.id;
  if (id) {
    let idx = produtos.findIndex(p => p.id == id);
    if (idx == -1) {
      res.status(404).json({erro: 'Produto não encontrado'});
      res.end();
    }
    res.json(produtos[idx]);
  }else{
    res.status(400).json({erro: 'id não informado'});
  }

});

apiRouterV2.post('/produtos', function (req, res, next) {
  let novo = req.body;
  if (novo) {
    novo.id = Math.max(...produtos.map(p => p.id)) + 1;
    produtos.push(novo);
    res.status(201).json(novo);
  }else{
    res.status(400).json({erro: 'novo não informado'});
  }
});

apiRouterV2.delete('/produtos/:id', function (req, res, next) {
  let id = req.params.id;
  if (id) {
    let idx = produtos.findIndex(p => p.id == id);
    if (idx == -1) {
      res.status(404).json({erro: 'Produto não encontrado'});
      res.end();
    }
    produtos.splice(idx, 1);
    res.status(204).end();
  }else{
    res.status(400).json({erro: 'id não informado'});
  }
});

apiRouterV2.put('/produtos/:id', function (req, res, next) {
  let id = req.params.id;
  if (id) {
    let idx = produtos.findIndex(p => p.id == id);
    if (idx == -1) {
      res.status(404).json({erro: 'Produto não encontrado'});
      res.end();
    }
    let novo = req.body;
    if (novo) {
      novo.id = id;
      produtos[idx] = novo;
      res.status(200).json(novo);
    }else{
      res.status(400).json({erro: 'novo não informado'});
    }
  }else{
    res.status(400).json({erro: 'id não informado'});
  }
})
module.exports = apiRouterV2;
