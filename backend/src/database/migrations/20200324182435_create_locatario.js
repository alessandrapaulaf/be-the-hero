
exports.up = function(knex) {
  return knex.schema.createTable('locatario', function (table){
    table.string('id').primary();
    table.string('nome').notNullable();
    table.string('cpf').notNullable();
    table.string('email').notNullable();
    table.string('cidade').notNullable();
    table.string('uf',2).notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('locatario');
};
