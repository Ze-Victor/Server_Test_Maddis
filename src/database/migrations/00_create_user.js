exports.up = async (knex) => knex.schema.createTable('user', (table) => {
  table.increments('id').primary();
  table.string('name').notNullable();
  table.string('email').notNullable();
  table.string('user').notNullable();
  table.string('password').notNullable();
  table.timestamp('created_at').defaultTo(knex.fn.now());
  table.timestamp('updated_at').defaultTo(knex.fn.now());
});

exports.down = async (knex) => knex.schema.dropTable('user');