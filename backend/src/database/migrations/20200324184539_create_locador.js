
exports.up = function(knex) {
  return knex.schema.createTable('locador', function(table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('cpf').notNullable();
    table.string('email').notNullable();
    table.string('cidade').notNullable();
    table.string('uf',2).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('locador');
};
