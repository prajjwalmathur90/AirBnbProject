import { Router } from "express";
import pingRouter from "./ping.router.js";
import { validate } from "../../middleware/validate.js";
import { pingValidateSchema } from "../../dtos/ping.dto.js";

const v1Router = Router();

v1Router.use("/ping", validate(pingValidateSchema), pingRouter);

export default v1Router;
