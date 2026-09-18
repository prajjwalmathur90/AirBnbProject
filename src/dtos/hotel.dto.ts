import z from "zod";

export const createHotelSchema = z.object({
  name: z.string().min(1),
  address: z.string().min(1),
  location: z.string().min(1),
  description: z.string().optional(),
  rating: z.number().optional(),
  ratingCount: z.number().optional(),
});

export type CreateHotelDto = z.infer<typeof createHotelSchema>;

export const updateHotelSchema = createHotelSchema.partial();

export type UpdateHotelDto = z.infer<typeof updateHotelSchema>;
