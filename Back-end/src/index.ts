import mongoose  from 'mongoose';
import express, { Application } from 'express';
import router from './routes/index'
import config from './config/config';
import logging from './config/logging';
import http from 'http';
import compression from 'compression';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import logger from 'morgan';


const app: Application = express();

const NAMESPACE = 'Server';

mongoose
    .connect(config.mongo.url, config.mongo.options)
    .then(() => {
        logging.info(NAMESPACE, 'Mongo Connected');
    })
    .catch((error) => {
        logging.error(NAMESPACE, error.message, error);
    });

app.use(compression());
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cookieParser());

app.use('/', router)

const httpServer = http.createServer(app);

httpServer.listen(config.server.port, () => {
    logging.info(NAMESPACE, `Server is running http://${config.server.hostname}:${config.server.port}`)
})