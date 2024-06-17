var express = require('express');
var apiRouterV1 = express.Router();

var produtos = [
  { "id": 1, "descricao": "Camiseta", "marca": "Nike", "preco": 19.99 },
  { "id": 2, "descricao": "Calça Jeans", "marca": "Levis", "preco": 49.99 },
  { "id": 3, "descricao": "Camisa Polo", "marca": "Adidas", "preco": 29.99 },
  { "id": 4, "descricao": "Tênis de corrida", "marca": "Adidas", "preco": 79.99 },
  { "id": 5, "descricao": "Bola de futebol", "marca": "Adidas", "preco": 59.99 },
  { "id": 6, "descricao": "Cueca", "marca": "Adidas", "preco": 9.99 },
  { "id": 7, "descricao": "Sandália", "marca": "Adidas", "preco": 49.99 },
  { "id": 8, "descricao": "Bermuda", "marca": "Adidas", "preco": 29.99 },
  { "id": 9, "descricao": "Sapatilha", "marca": "Adidas", "preco": 69.99 },
  { "id": 10, "descricao": "Cinto", "marca": "Adidas", "preco": 9.99 }
];

apiRouterV1.get('/produtos', function (req, res, next) {
  res.json(produtos);
});

apiRouterV1.get('/produtos/:id', function (req, res, next) {
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

apiRouterV1.post('/produtos', function (req, res, next) {
  let novo = req.body;
  if (novo) {
    novo.id = Math.max(...produtos.map(p => p.id)) + 1;
    produtos.push(novo);
    res.status(201).json(novo);
  }else{
    res.status(400).json({erro: 'novo não informado'});
  }
});

apiRouterV1.delete('/produtos/:id', function (req, res, next) {
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

apiRouterV1.put('/produtos/:id', function (req, res, next) {
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
module.exports = apiRouterV1;
