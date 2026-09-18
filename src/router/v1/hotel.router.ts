import { Router } from "express";
import {
  createHotelController,
  deleteHotelController,
  getHotelByIdController,
  updateHotelController,
} from "../../controller/hotel.controller.js";
import { validate } from "../../middleware/validate.js";
import { createHotelSchema, updateHotelSchema } from "../../dtos/hotel.dto.js";

const hotelRouter = Router();

hotelRouter.post("/", validate(createHotelSchema), createHotelController);
hotelRouter.get("/:id", getHotelByIdController);
hotelRouter.put("/:id", validate(updateHotelSchema), updateHotelController);
hotelRouter.delete("/:id", deleteHotelController);

export default hotelRouter;
