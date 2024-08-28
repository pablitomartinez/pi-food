# API de Food - Proyecto de Recetas

## Descripción

Esta API permite buscar, crear y gestionar recetas, así como obtener diferentes tipos de dietas. Utiliza la API de Spoonacular para obtener recetas externas y combina esta información con datos almacenados en una base de datos PostgreSQL. La API también incluye validaciones para proteger la base de datos y manejar los errores de manera efectiva.

## Configuración del Proyecto

### Requisitos Previos

- Node.js (v12.18.3 o superior)
- PostgreSQL (v12 o superior)

### Instalación

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/tu_usuario/api-food.git
   cd api-food/api
Instalar dependencias:

bash
Copiar código
npm install
Configurar el archivo .env:

Crea un archivo .env en la raíz del directorio api con el siguiente contenido:

bash
Copiar código
DB_USER=postgres
DB_PASSWORD=postgres
DB_HOST=localhost
DB_NAME=food
SPOONACULAR_API_KEY=tu_api_key_aqui
Reemplaza tu_api_key_aqui con tu clave de la API de Spoonacular.

Iniciar el servidor:

bash
Copiar código
npm start
El servidor se iniciará en http://localhost:3001.

Rutas Disponibles
Recetas
Obtener todas las recetas o buscar por nombre:

http
Copiar código
GET /recipes
GET /recipes?name={nombre}
Descripción: Devuelve todas las recetas o las recetas que coincidan con el nombre proporcionado.
Parámetros de consulta:
name (opcional): Busca recetas que coincidan con el nombre dado.
Respuesta exitosa: 200 OK con un array de recetas.
Obtener una receta por ID:

http
Copiar código
GET /recipes/:id
Descripción: Devuelve la receta que coincide con el ID dado.
Parámetros de ruta:
id: ID de la receta (puede ser un número para recetas de la API o un UUID para recetas de la base de datos).
Respuesta exitosa: 200 OK con la receta solicitada.
Crear una nueva receta:

http
Copiar código
POST /recipes
Descripción: Crea una nueva receta en la base de datos.
Cuerpo de la solicitud:
name (string): Nombre de la receta (obligatorio).
summary (string): Descripción de la receta (obligatorio).
healthScore (integer): Puntaje de salud (opcional).
stepByStep (array de objetos): Pasos para realizar la receta (opcional).
dietTypes (array de strings): Tipos de dieta asociados a la receta (opcional).
Respuesta exitosa: 201 Created con la receta creada.
Dietas
Obtener todos los tipos de dietas:

http
Copiar código
GET /diets
Descripción: Devuelve todos los tipos de dietas disponibles.
Respuesta exitosa: 200 OK con un array de nombres de dietas.
Validaciones
La API incluye un middleware de validación para asegurarse de que las solicitudes POST contengan los datos necesarios antes de interactuar con la base de datos. Esto previene errores y protege la integridad de los datos.

Middleware de validación:

javascript
Copiar código
const validate = (req, res, next) =>{
    const {name, summary, stepByStep} = req.body;

    if(!name) return res.status(400).json({error: "Missing Name"});
    if(!summary) return res.status(400).json({error: "Missing summary"});
    if(!stepByStep) return res.status(400).json({error: "Missing stepByStep"});

    next();
}
Manejo de Errores
Los controladores de la API están envueltos en bloques try/catch para manejar errores de forma efectiva. En caso de error, se retorna un mensaje descriptivo junto con un código de estado 400 Bad Request.

Contribuciones
Las contribuciones son bienvenidas. Si tienes sugerencias, correcciones o mejoras, no dudes en hacer un fork del repositorio y abrir un pull request.

Licencia
Este proyecto está licenciado bajo la MIT License.

markdown
Copiar código

### **Siguiente Paso**
- **Revisar y ajustar el README si es necesario:** Asegúrate de que toda la información en el README sea correcta y relevante para tu proyecto.
- **Implementar los cambios pendientes:** Podemos seguir revisando cualquier parte del código, como el manejo de errores o la validación, si lo necesitas.

Dime si hay algo más que quieras ajustar o revisar, ¡estamos avanzando muy bien!