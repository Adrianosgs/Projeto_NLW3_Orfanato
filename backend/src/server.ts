import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';
import './database/connection';
import routes from './routes';
import errorHandler from './errors/handler';


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);
//Rota = conjuntos
// Recurso = usuarios
// metodos HTTP = get, post, put, delete
// parametros

// Get = buscar informação
//post = criar informação
// Put = editar informação
// Delet = deletar informação 

app.listen(3333);
 
 