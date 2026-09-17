import { NextFunction, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { asyncLocalStorage } from "../utils/helper/request.helper.js";

export function attachCorrelationId(
  req: Request,
  _res: Response,
  next: NextFunction,
) {
  const correlationId = uuidv4();

  req.headers["x-correlation-id"] = correlationId;
  asyncLocalStorage.run({ correlationid: correlationId }, () => {
    next();
  });
}
