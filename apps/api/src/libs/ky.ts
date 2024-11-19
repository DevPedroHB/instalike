import { env } from "@instalike/env";
import ky from "ky";

export const api = ky.create({
	prefixUrl: env.JSON_SERVER_URL,
});
