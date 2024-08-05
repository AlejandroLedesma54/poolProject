// npm install typescript ts-node (ejecutar typescript en node) @types/node --save-dev 
// npm install express @types/express (inicializa el servidor y da las rutas)
// npm install nodemon --save-dev (este escuchando todos los cambios en el archivo)
// npm install mysql2
// npm install dotenv (varias de entorno)

import express from 'express';
import dotenv from 'dotenv';
import mainRouter from './routes/Router';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Cuando mandemos Json lo pueda entender
app.use('/api', mainRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});