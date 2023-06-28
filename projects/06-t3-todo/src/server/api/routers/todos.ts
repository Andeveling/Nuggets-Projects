import {
  createTRPCRouter,
  protectedProcedure
} from "@/server/api/trpc";
import { z } from "zod";

const TodoSchema = z.object({
  title: z.string(),
  description: z.string(),
});

export const todoRouter = createTRPCRouter({
  getAllTodo: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.todo.findMany({ where: { userId: ctx.session.user.id } });
  }),
  createTodo: protectedProcedure
    .input(TodoSchema)
    .mutation(async ({ ctx, input }) => {
      const createTodo = await ctx.prisma.todo.create({
        data: {
          title: input.title,
          description: input.description,
          userId: ctx.session.user.id,
        },
      });
      return createTodo;
    }),
  deleteTodo: protectedProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const deleteTodo = await ctx.prisma.todo.delete({
        where: {
          id: input.id,
        },
      });
      return deleteTodo;
    }),
});
