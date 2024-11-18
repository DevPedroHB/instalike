import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		API_PORT: z.coerce.number().default(3333),
	},
	client: {},
	shared: {},
	runtimeEnv: {
		API_PORT: process.env.API_PORT,
	},
	emptyStringAsUndefined: true,
});
