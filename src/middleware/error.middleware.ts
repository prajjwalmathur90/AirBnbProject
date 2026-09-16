import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/errors/app.error.js";

export function genericErrorHandler(
  err: AppError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
}
