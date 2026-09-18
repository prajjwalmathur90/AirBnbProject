import logger from "../config/logger.config.js";
import prisma from "../config/prisma.js";
import { CreateHotelDto, UpdateHotelDto } from "../dtos/hotel.dto.js";
import { notFound } from "../utils/errors/app.error.js";

export async function createHotel(hotelData: CreateHotelDto) {
  const hotel = await prisma.hotel.create({
    data: hotelData,
  });

  logger.info(`Hotel created: ${hotel.id}`);

  return hotel;
}

export async function getHotelById(id: number) {
  const hotel = await prisma.hotel.findUnique({
    where: {
      id,
    },
  });

  if (!hotel) {
    throw notFound("Hotel not found");
  }

  logger.info(`Hotel found: ${hotel.id}`);

  return hotel;
}

export async function updateHotelById(id: number, hotelData: UpdateHotelDto) {
  const hotel = await prisma.hotel.update({
    where: {
      id,
    },
    data: hotelData,
  });

  logger.info(`Hotel updated: ${hotel.id}`);

  return hotel;
}

export async function deleteHotelById(id: number) {
  const hotel = await prisma.hotel.delete({
    where: {
      id,
    },
  });

  logger.info(`Hotel deleted: ${hotel.id}`);

  return hotel;
}
