import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";

const app = new Hono();

app.use('*', logger(console.log));

app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

app.get("/make-server-6c8ccaad/health", (c) => {
  return c.json({ status: "ok" });
});

// GET all reviews sorted by creation time
app.get("/make-server-6c8ccaad/reviews", async (c) => {
  try {
    const reviews = await kv.getByPrefix("review:");
    reviews.sort((a: any, b: any) => a.createdAt - b.createdAt);
    return c.json({ reviews });
  } catch (error) {
    console.log("Error fetching reviews:", error);
    return c.json({ error: `Error fetching reviews: ${error}` }, 500);
  }
});

// POST a new review
app.post("/make-server-6c8ccaad/reviews", async (c) => {
  try {
    const body = await c.req.json();
    const { name, role, text, rating, avatar } = body;

    if (!name || !text) {
      return c.json({ error: "name and text are required" }, 400);
    }

    const id = Date.now();
    const review = {
      id,
      name: String(name).slice(0, 80),
      role: String(role || "Cliente").slice(0, 80),
      text: String(text).slice(0, 400),
      rating: Math.min(5, Math.max(1, Number(rating) || 5)),
      avatar: String(avatar || name)[0].toUpperCase(),
      createdAt: id,
    };

    await kv.set(`review:${String(id).padStart(20, "0")}`, review);

    return c.json({ review }, 201);
  } catch (error) {
    console.log("Error saving review:", error);
    return c.json({ error: `Error saving review: ${error}` }, 500);
  }
});

Deno.serve(app.fetch);
