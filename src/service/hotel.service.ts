import { CreateHotelDto, UpdateHotelDto } from "../dtos/hotel.dto.js";
import {
  createHotel,
  deleteHotelById,
  getHotelById,
  updateHotelById,
} from "../repository/hotel.repository.js";

export async function createHotelService(hotelData: CreateHotelDto) {
  return await createHotel(hotelData);
}

export async function getHotelByIdService(id: number) {
  return await getHotelById(id);
}

export async function updateHotelService(
  id: number,
  hotelData: UpdateHotelDto,
) {
  return await updateHotelById(id, hotelData);
}

export async function deleteHotelService(id: number) {
  return await deleteHotelById(id);
}
