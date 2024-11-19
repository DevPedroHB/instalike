import { env } from "@instalike/env";
import express from "express";
import { api } from "./libs/ky";

const app = express();

app.get("/posts", async (req, res) => {
	const posts = await api.get("posts").json();

	return res.status(200).send({
		posts,
	});
});

app.get("/posts/:id", async (req, res) => {
	const { id } = req.params;

	const post = await api.get(`posts/${id}`).json();

	return res.status(200).send({
		post,
	});
});

app.listen(env.API_PORT, () => {
	console.log(`🚀 HTTP server listening on port ${env.API_PORT}`);
});
