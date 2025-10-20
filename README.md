# 🍕 CRUD Pizzería

Aplicación básica construida con **Node.js**, **Express** y **MySQL**, que permite gestionar pizzas mediante operaciones CRUD (crear, leer, actualizar y eliminar).

---

# 🚀 Tecnologías utilizadas
- Node.js  
- Express  
- MySQL2  
- Dotenv  
- Nodemon (para desarrollo)

---

# 📦 Instalación

## Clona este repositorio:
```
git clone https://github.com/morganmurilobondioli-ui/crud_pizzeria.git
```
## Accede al proyecto:
```   
cd crud_pizzeria
``` 
## Instala las dependencias
``` 
npm install
``` 
## Crea un archivo .env en la raíz con tus credenciales de base de datos:
```  
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=
    DB_NAME=crud_pizzeria
    PORT=3000
``` 
---

# 📚 Base de Datos

```sql
    CREATE DATABASE pizzeria_db;
    USE pizzeria_db;

    CREATE TABLE pizzas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    ingredientes TEXT NOT NULL,
    precio DECIMAL(5,2) NOT NULL
    );
```

---
# 🧠 Uso
Ejecuta el servidor:
```
nodemon server.js
```
(usa nodemon para reiniciar automáticamente el servidor)

---
   
# 🔗 Endpoints principales
```

Método	|   Ruta	            |   Descripción

GET	    |   /api/pizzas	        |   Lista todas las pizzas

GET	    |   /api/pizzas/:id	    |   Busca una pizza por ID

POST	|   /api/pizzas	        |   Crea una nueva pizza

PUT	    |   /api/pizzas/:id	    |   Actualiza una pizza existente

DELETE	|   /api/pizzas/:id	    |   Elimina una pizza
```

---

# Ejemplo de cuerpo JSON para crear una pizza:

```json
{
    "nombre": "Pepperoni",
    "ingredientes": "Queso, salsa de tomate, pepperoni",
    "precio": 28.50
}
```
---

# 🧰 Scripts disponibles
```
    npm start     # Inicia el servidor en modo producción
    nodemon server.js   # Inicia el servidor con nodemon
```
