import { Router } from "express";
import {
  createHotelController,
  deleteHotelController,
  getAllHotelsController,
  getHotelByIdController,
} from "../../controller/hotel.controller.js";
import { validate } from "../../middleware/validate.js";
import { createHotelSchema } from "../../dtos/hotel.dto.js";

const hotelRouter = Router();

hotelRouter.post("/", validate(createHotelSchema), createHotelController);
hotelRouter.get("/:id", getHotelByIdController);
hotelRouter.get("/", getAllHotelsController);
hotelRouter.delete("/:id", deleteHotelController);

export default hotelRouter;
