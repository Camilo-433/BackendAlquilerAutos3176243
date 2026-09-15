import { Sequelize } from 'sequelize';
import definirAuto from './auto.js';
import definirCliente from './cliente.js';
import definirAlquiler from './alquiler.js';

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: { require: true, rejectUnauthorized: false }
    },
    logging: false
});

const Auto = definirAuto(sequelize);
const Cliente = definirCliente(sequelize);
const Alquiler = definirAlquiler(sequelize);

const db = { sequelize, Auto, Cliente, Alquiler };

Object.values(db).forEach((modelo) => {
    if (modelo && typeof modelo.associate === 'function') {
        modelo.associate(db);
    }
});

export { sequelize, Auto, Cliente, Alquiler };
export default db;