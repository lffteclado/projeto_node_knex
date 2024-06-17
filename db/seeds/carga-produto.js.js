/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('produtos').del()
  await knex('produtos').insert([
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
  ]);
};
