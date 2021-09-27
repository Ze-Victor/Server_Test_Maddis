exports.up = async (knex) => knex.schema.createTable('user', (table) => {
  table.increments('id').primary();
  table.string('name').notNullable();
  table.string('email').notNullable();
  table.string('user').unique().notNullable();
  table.string('password').notNullable();
  table.timestamp(true, true);
});

exports.down = async (knex) => knex.schema.dropTable('user');