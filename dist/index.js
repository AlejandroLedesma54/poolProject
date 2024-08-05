"use strict";
// npm install typescript ts-node (ejecutar typescript en node) @types/node --save-dev 
// npm install express @types/express (inicializa el servidor y da las rutas)
// npm install nodemon --save-dev (este escuchando todos los cambios en el archivo)
// npm install mysql2
// npm install dotenv (varias de entorno)
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const Router_1 = __importDefault(require("./routes/Router"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3300;
app.use(express_1.default.json()); // Cuando mandemos Json lo pueda entender
app.use('/api', Router_1.default);
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
