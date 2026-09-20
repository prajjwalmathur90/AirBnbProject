import logger from "../config/logger.config.js";
import prisma from "../config/prisma.js";
import { CreateHotelDto } from "../dtos/hotel.dto.js";
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

export async function getAllHotels() {
  const hotels = await prisma.hotel.findMany({
    where: {
      deletedAt: null,
    },
  });

  if (!hotels) {
    throw notFound("No hotel found");
  }

  logger.info("Hotels found");

  return hotels;
}


export async function softDeleteHotel(id: number) {
  const hotel = await getHotelById(id);

  if (!hotel) {
    throw notFound("Hotel not found");
  }

  const deletedHotel = await prisma.hotel.update({
    where: {
      id,
    },
    data: {
      deletedAt: new Date(),
    },
  });

  logger.info(`Hotel soft deleted: ${deletedHotel.id}`);

  return deletedHotel;
}
