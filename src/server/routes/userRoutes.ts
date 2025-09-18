import { Router } from 'express';
import UserController from '../controllers/userController';

const router = Router();
const userController = new UserController();

export const setUserRoutes = (app) => {
    app.use('/api/users', router);

    router.post('/register', userController.createUser);
    router.post('/login', userController.loginUser);
};