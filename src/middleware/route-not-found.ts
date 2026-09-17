import { NextFunction, Request, Response } from "express";
import { notFound } from "../utils/errors/app.error.js";

export function routeNotFound(
  _req: Request,
  _res: Response,
  next: NextFunction,
) {
  next(notFound("Route not found!"));
}
