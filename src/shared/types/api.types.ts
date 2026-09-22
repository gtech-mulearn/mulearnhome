import { z } from "zod";

export const ApiResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    hasError: z.boolean(),
    statusCode: z.number(),
    message: z.record(z.string(), z.array(z.string())).optional().nullable(),
    response: dataSchema,
  });

export type ApiResponse<T> = {
  hasError: boolean;
  statusCode: number;
  message?: Record<string, string[]> | null;
  response: T;
};

// ─── Shared pagination ────────────────────────────────────────────────────────

/** Matches the backend's actual pagination dict exactly (`CustomResponse.paginated_response()` in mulearnbackend). */
export const PaginationSchema = z.object({
  count: z.number().optional(),
  totalPages: z.coerce.number().default(1),
  isNext: z.boolean().optional(),
  isPrev: z.boolean().optional(),
  nextPage: z.number().nullable().optional(),
});

export type Pagination = z.infer<typeof PaginationSchema>;
