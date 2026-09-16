import { Request, Response } from "express";

export function pingController(_req: Request, res: Response) {
  res.status(200).json({ success: true, message: "pong!" });
}
