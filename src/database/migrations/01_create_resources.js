exports.up = async (knex) => knex.schema.createTable('resource', (table) => {
  table.increments('id').primary();
  table.string('title').notNullable();
  table.string('description').notNullable();
  table.string('content').notNullable();

  table.integer('user_id').references('user.id').notNullable().onDelete('CASCADE');

  table.timestamp(true, true);

});

exports.down = async (knex) => knex.schema.dropTable('resource');