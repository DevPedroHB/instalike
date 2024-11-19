import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		API_PORT: z.coerce.number().default(3333),
		JSON_SERVER_URL: z.string().url().default("http://localhost:3334"),
	},
	client: {},
	shared: {},
	runtimeEnv: {
		API_PORT: process.env.API_PORT,
		JSON_SERVER_URL: process.env.JSON_SERVER_URL,
	},
	emptyStringAsUndefined: true,
});
