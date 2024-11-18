import { env } from "@instalike/env";
import express from "express";

const app = express();

app.get("/api", (req, res) => {
	return res.status(200).send({
		message: "Hello from Instalike API",
	});
});

app.listen(env.API_PORT, () => {
	console.log(`🚀 HTTP server listening on port ${env.API_PORT}`);
});
