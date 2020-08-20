import express from 'express';
import ClassesController from './controllers/ClassesController';

const routes = express.Router();
const classesControllers = new ClassesController();

routes.post('/onibus', classesControllers.create);
routes.get('/onibus', classesControllers.index);

export default routes;