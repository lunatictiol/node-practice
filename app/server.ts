import express, { Express, Request, Response, NextFunction } from "express";
import errorHandler from "./middleware/ErrorMiddleware";
import booksrouter from "./routes/books.routes";
import bookApiLimiter from "./middleware/RateLimiter";
const app: Express = express();
app.use(errorHandler);
app.use(bookApiLimiter);
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/books", booksrouter);

// Global Error Handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message || "Something went wrong!" });
});
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
