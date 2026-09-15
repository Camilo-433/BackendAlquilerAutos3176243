require('dotenv').config();

const comun = {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
        ssl: { require: true, rejectUnauthorized: false } // Exigido por Neon
    },
    logging: false
};

module.exports = {
    development: comun,
    test: comun,
    production: comun
};