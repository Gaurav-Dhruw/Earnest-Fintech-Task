import Express, { } from "express";
import { router } from "./route";
import { errorHandler } from "./middleware/error-handler.middleware";



const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 8000;


const startServer = async () => {

    const app = Express();

    app.use(Express.json());

    app.use('/', router);

    app.use(errorHandler);

    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`)
    });
}


startServer();