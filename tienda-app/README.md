# 🛍️ Mongo Store

Mongo Store es una aplicación web que permite a los usuarios visualizar productos y, si aplica, obtener precios especiales según su identificación.  
El proyecto está construido con **React** en el frontend y **Node.js con Express y MongoDB** en el backend.

---

## 🚀 Características Principales

✅ Listado de productos obtenidos desde MongoDB  
✅ Manejo de precios especiales por usuario  
✅ Backend con Express y conexión a MongoDB  
✅ Frontend en React con Bootstrap para diseño  
✅ API para obtener y registrar precios especiales  

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Descripción |
|------------|------------|
| **React.js** | Framework para construir la interfaz de usuario |
| **Node.js** | Entorno de ejecución para el backend |
| **Express.js** | Framework para crear la API REST |
| **MongoDB** | Base de datos NoSQL para almacenar productos y precios especiales |
| **Bootstrap** | Librería para estilos y diseño responsive |

---

## 📂 Estructura del Proyecto
```bash
mongoRCJStore/
│── backend/                # Código del servidor con Node.js y Express
│   ├── models/             # Modelos de MongoDB y rutas del API (Productos, Precios Especiales)
│   ├── index.js            # Archivo principal del backend
│── tienda-app/             # Código del frontend con React
│   ├── src/
│   │   ├── components/     # Componentes React (Articulos, Subida)
│   │   ├── App.js          # Componente principal
│   │   ├── index.js        # Punto de entrada de React
│   ├── public/             # Archivos públicos (favicon, index.html)
│── README.md               # Documentación del proyecto
│── .gitignore              # Archivos ignorados por Git
│── package.json            # Dependencias y configuración del proyecto
```

## Como ejecutar el proyecto localmente

1. Clonar el repositorio

git clone https://github.com/miguelcc705/mongoRCJStore.git

cd mongoRCJStore

2. Instalar dependencias en el frontend

### `cd tienda-app`

### `npm install`

3. Iniciar la aplicación frontend

### `npm start`

Abrir [http://localhost:3000](http://localhost:3000) para ver en el navegador.

3. Iniciar la aplicación backend

### `cd backend`

### `node index.js`

El servidor se ejecutará en http://localhost:5000/


## Configuración del usuario

Para simular un usuario en la aplicación, se debe modificar el archivo Articulos.js dentro de la carpeta components/ en tienda-app:

const [usuarioId] = useState("777"); // Cambiar este ID según el usuario logueado



### 📌 Justificación de Elecciones Técnicas
✅ MongoDB: Requerimiento de la prueba técnica.
✅ Express.js: Permite crear una API REST de manera rápida y eficiente.
✅ React.js: Requerimiento de la prueba técnica.
✅ La elección de JavaScript en lugar de TypeScript para este proyecto se basó en varios factores clave relacionados con la simplicidad del proyecto, velocidad de desarrollo y compatibilidad.
✅ Bootstrap: Se utilizó para mejorar la presentación y la experiencia de usuario.

### 📜 Licencia
Este proyecto está bajo la Licencia MIT, lo que significa que puedes modificarlo y distribuirlo libremente.

### 📬 Contacto
📧 Desarrollador: Miguel Angel C.
🔗 GitHub: miguelcc705