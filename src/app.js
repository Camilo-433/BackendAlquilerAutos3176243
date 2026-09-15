import express from 'express';
import clienteRoutes from './routes/clienteRoutes.js';

const app = express(); // para que expres entienda JSON

app.use(express.json());

// ruta para verificar la API
app.get('/', (req, res) => {
    res.status(200).json({
        mensaje: 'API de Alquiler de Autos funcionando correctamente'
    });
});

app.use('/api/clientes', clienteRoutes);

export default app;