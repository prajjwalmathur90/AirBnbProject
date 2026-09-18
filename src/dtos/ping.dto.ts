import z from "zod/v3";

export const pingValidateSchema = z.object({
  message: z.string().default("ok"),
});

export type PingValidateSchema = z.infer<typeof pingValidateSchema>;
