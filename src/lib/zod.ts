import { z } from "zod";
import { zid } from "convex-helpers/server/zod";


// z form schema for validation

export const createToDoFormSchema = z.object({
  title: z.string().min(3, "Todo must contain at least 3 characters"),
});

export const updateTodoSchema = z.object({
  id: zid("todos"),
  title: z.string().min(3, "Todo must contain at least 3 characters"),
  completed: z.boolean(),
});

export const deleteTodoSchema = z.object({
  id: zid("todos"),
});