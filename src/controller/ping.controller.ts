import { Request, Response } from "express";
import { sendSuccess } from "../utils/responses/app.response.js";

export function pingController(_req: Request, res: Response) {
  sendSuccess(res, "^_^", 200, "Pong!");
}
