import { Request, Response } from "express";
import {
  createHotelService,
  deleteHotelService,
  getAllHotelsService,
  getHotelByIdService,
} from "../service/hotel.service.js";
import { sendSuccess } from "../utils/responses/app.response.js";

export async function createHotelController(req: Request, res: Response) {
  const hotelResponse = await createHotelService(req.body);
  sendSuccess(res, hotelResponse, 201, "Hotel Created Successfully");
}

export async function getHotelByIdController(req: Request, res: Response) {
  const hotelResponse = await getHotelByIdService(Number(req.params.id));
  sendSuccess(res, hotelResponse, 200, "Hotel Found Successfully");
}

export async function getAllHotelsController(_req: Request, res: Response) {
  const hotelResponse = await getAllHotelsService();
  sendSuccess(res, hotelResponse, 200, "Hotels Found Successfully");
}

export async function deleteHotelController(req: Request, res: Response) {
  const id = Number(req.params.id);
  const hotelResponse = await deleteHotelService(id);
  sendSuccess(res, hotelResponse, 200, "Hotel Deleted Successfully");
}
