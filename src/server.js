import 'dotenv/config';
import app from './app.js';
import { sequelize } from './models/index.js';

const PORT = process.env.PORT || 3000;

try {
  // Probar la conexión con Neon
  await sequelize.authenticate();
  console.log('Conexión con la base de datos establecida');

  // Sincronizar los modelos y CREAR las tablas en Neon
  await sequelize.sync({ alter: true });
  console.log('Tablas creadas/sincronizadas correctamente en Neon');

  // Iniciar el servidor Express
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
} catch (error) {
  console.error('No se pudo conectar con la base de datos:', error.message);
}