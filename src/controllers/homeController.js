import { Router } from "express";

const homeController = Router();

homeController.get('/', (req, res) => {
    res.send('Hello World!'); 
});

export default homeController;