import { CreateHotelDto, UpdateHotelDto } from "../dtos/hotel.dto.js";
import {
  createHotel,
  softDeleteHotel,
  getAllHotels,
  getHotelById,
  updateHotelById,
} from "../repository/hotel.repository.js";
import { notFound } from "../utils/errors/app.error.js";

export async function createHotelService(hotelData: CreateHotelDto) {
  return await createHotel(hotelData);
}

export async function getHotelByIdService(id: number) {
  return await getHotelById(id);
}

export async function getAllHotelsService() {
  return await getAllHotels();
}

export async function updateHotelService(
  id: number,
  hotelData: UpdateHotelDto,
) {
  const hotel = await getHotelById(id);

  if (!hotel) {
    throw notFound("Hotel not found!");
  }

  return await updateHotelById(id, hotelData);
}

export async function deleteHotelService(id: number) {
  return await softDeleteHotel(id);
}
