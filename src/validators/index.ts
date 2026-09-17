import { NextFunction, Request, Response } from "express";
import { ZodObject } from "zod";
import { badRequest } from "../utils/errors/app.error.js";

export const validateRequestBody = (schema: ZodObject) => {
  return async (req: Request, _res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      next();
    } catch (error) {
      throw badRequest("Bad Request!");
    }
  };
};
