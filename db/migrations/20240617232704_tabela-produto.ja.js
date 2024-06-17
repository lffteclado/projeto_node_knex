/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('produtos', function (table) {
      table.increments('id').primary();
      table.text('descricao', 255).unique().notNullable();
      table.text('marca', 128).notNullable();
      table.decimal('preco').notNullable();
    })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('produtos')  
};
