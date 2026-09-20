import { CreateHotelDto } from "../dtos/hotel.dto.js";
import {
  createHotel,
  softDeleteHotel,
  getAllHotels,
  getHotelById,
} from "../repository/hotel.repository.js";

export async function createHotelService(hotelData: CreateHotelDto) {
  return await createHotel(hotelData);
}

export async function getHotelByIdService(id: number) {
  return await getHotelById(id);
}

export async function getAllHotelsService() {
  return await getAllHotels();
}

export async function deleteHotelService(id: number) {
  return await softDeleteHotel(id);
}
