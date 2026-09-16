import { Router } from "express";
import { pingController } from "../../controller/ping.controller.js";

const pingRouter = Router();

pingRouter.get("/", pingController);

export default pingRouter;
