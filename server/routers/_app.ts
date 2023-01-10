import { z } from "zod";
import { procedure, router } from "../trpc";
import getAllUsers from "../../backend/users/getAll";

export const appRouter = router({
    hello: procedure
        .input(
            z.object({
                text: z.string(),
            })
        )
        .query(({ input }) => {
            return {
                greeting: `hello ${input.text}`,
            };
        }),
    getAllUsers: procedure.query(async () => {
        const users = await getAllUsers();

        return users;
    }),
});

export type AppRouter = typeof appRouter;
