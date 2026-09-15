# 🚗 API REST - Sistema de Alquiler de Autos

Proyecto backend desarrollado para el programa **Análisis y Desarrollo de Software (ADSO)** - SENA CTPI Regional Cauca.

## 🚀 Despliegue en Producción
* **URL Pública de la API:** `https://backendalquilerautos3176243-ch0u.onrender.com`
* **Base de Datos:** PostgreSQL en Neon.tech

## 🛠️ Tecnologías Utilizadas
* **Entorno de ejecución:** Node.js (ES Modules)
* **Framework Web:** Express.js
* **ORM:** Sequelize
* **Base de datos:** PostgreSQL (Neon)
* **Autenticación:** JWT (JSON Web Tokens) & Bcrypt
* **Hosting:** Render

## 📌 Principales Endpoints

### 🔑 Clientes (`/api/clientes`)
* `POST /registro` - Registro de nuevos clientes.
* `POST /login` - Autenticación y obtención de token JWT.
* `GET /perfil` - Consulta de perfil (Ruta protegida por Bearer Token).

### 🚘 Autos (`/api/autos`)
* `GET /` - Catálogo completo de autos.
* `GET /disponibles` - Consulta de vehículos disponibles.
* `POST /` - Registro de vehículos (Protegido).
* `PUT /:id` - Actualización de autos (Protegido).
* `DELETE /:id` - Dar de baja a un vehículo (Protegido).

### 📋 Alquiler (`/api/alquiler`)
* `POST /` - Crear un nuevo alquiler (Protegido).
* `GET /historial` - Historial de alquileres del cliente autenticado (Protegido).
* `PUT /devolver/:id` - Devolución de vehículo y liberación de disponibilidad (Protegido).