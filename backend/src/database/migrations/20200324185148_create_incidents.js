
exports.up = function(knex) {
	return knex.schema.createTable('incidents', function(table){
		table.increments();
		table.string('titulo').notNullable();
		table.string('descricao').notNullable();
		table.decimal('valor').notNullable();

		table.string('locador_id').notNullable();

		table.foreign('locador_id').references('id').inTable('locador');
	});
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
