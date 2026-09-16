import { Router } from "express";
import pingRouter from "./ping.router.js";
import { validateRequestBody } from "../../validators/index.js";
import { pingSchema } from "../../validators/ping.validator.js";

const v1Router = Router();

v1Router.use("/ping", validateRequestBody(pingSchema), pingRouter);

export default v1Router;
