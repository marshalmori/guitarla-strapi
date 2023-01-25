module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cf8mhbcgqg47fti98idg-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_7dt6'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'dTQsCvHuCwdcjvFYX3DgyDbWB6oIXeBr'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
