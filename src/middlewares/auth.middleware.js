import jwt from 'jsonwebtoken';

export function verificarToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Formato "Bearer <token>"

    if (!token) {
        return res.status(401).json({ mensaje: 'Token no proporcionado' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
        if (err) {
            return res.status(403).json({ mensaje: 'Token invalido o expirado' });
        }
        req.cliente = payload; // Adjunta la información del cliente a la petición
        next();
    });
}