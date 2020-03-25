// Update with your config settings.

module.exports = {
  client: 'mysql',
  connection: {
    database: 'users-db',
    user: 'root',
    password: '12345678'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
