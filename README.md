Bienvenidos y ¡gracias por revisar este documento!

<h1>Estructura del Proyecto</h1>

<p>Este proyecto fue escrito usando JavaScript como lenguaje. El repositorio cuenta con dos carpetas principales: Client y Server.</p>

<h2>Client</h2>
<p>El client está creado con JS y utiliza React Vite. Dentro de esta carpeta, en la carpeta src, se encuentran los archivos principales que son DocumentValidation (dentro del folder views), FileUploader (dentro del folder components) y ValidationResult (dentro del folder components). En su orden, la función de estos es crear la solicitud de validación, hacer la carga de las imágenes y obtener el resultado de la validación.</p>

<h2>Server</h2>
<p>El Server está creado en Node.js y utiliza la librería Express. Dentro de esta carpeta, en la carpeta src, se encuentran los archivos principales para la lógica del servidor (index, router y controllers). Dentro de la carpeta Server, a la misma altura de la carpeta src preferiblemente, se debe crear un archivo .env para poder incluir la clave API. La clave debe ser escrita de esta forma: API_KEY y luego poner allí la clave (API_KEY=api_key_de_acceso).</p>

<h1>Como levantar el proyecto</h1>

  <li>Hacer un npm install para obtener las dependencias necesarias.</li>
  <li>Crear la carpeta .env dentro de la carpeta server y escribir la variable de entorno API_KEY (API_KEY=api_key_de_acceso).</li>
  <li>Abrir la carpeta server en la terminal y ejecutar el comando npm start.</li>
  <li>Abrir la carpeta client en la terminal y ejecutar el comando npm run dev.</li>


<h1>Como realizar la validación</h1>

  <li>Ir al navegador y llenar los campos de información solicitados (En el campo de país solo se han agregado 3 opciones para el ejercicio).</li>
  <li>Subir la foto del documento por la parte frontal.</li>
  <li>Subir la foto del documento por la parte trasera.</li>
  <li>Hacer clic en el botón de subir archivo.</li>
  <li>Esperar a recibir el resultado de la validación. (para ver las respuestas de la api, en la consola del serer se han dejado unos log intencionales)</li>


<h1>Importante!</h1>
<p>Sí se quiere intentar una otra validación y se usará una imagen que ya se habia cargado en una solicitud anterior, se debe ir a la carpeta llamada uploads en el folder del server y eliminar el archivo de esa imagen</p>




