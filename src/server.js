import express from 'express';
import './db/db.js';
import { errorHandler } from './middlewares/errorHandler.js';
import morgan from 'morgan';
import productsRouter from './routes/products.router.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(errorHandler);
app.use(morgan('dev'));

//aca ingresa peticion y va a products.router.js
app.use('/products', productsRouter)

const PORT = 8080;
app.listen(PORT, ()=>
console.log(`server ok on port ${PORT}`)
);






