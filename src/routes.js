import { Router } from "express";

import homeController from "./controllers/homeController.js";

const routes = Router();

routes.use(homeController);
routes.all('*url', (req, res) => {
    res.render('404', { layout: false });
});

export default routes;