import { query, mutation } from "./_generated/server";
import { v } from "convex/values";


// get to do list
export const getTodos = query({
  handler: async (ctx) => {
    const todos = await ctx.db.query("todos").collect();
    return todos.reverse();
  },
});


// add to do item
export const addTodo = mutation({
  args: {
    title: v.string(),
    completed: v.boolean(),
  },
  handler: async (ctx, args ) => {
    await ctx.db.insert("todos", args);
  },
});
