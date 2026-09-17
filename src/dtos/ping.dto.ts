import z from "zod/v3";

export const pingValidateSchema = z.object({
  message: z.string().optional(),
});

export type PingValidateSchema = z.infer<typeof pingValidateSchema>;
