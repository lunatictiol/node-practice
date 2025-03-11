import express from "express";
const booksrouter = express.Router();
import {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} from "../controller/books.controller";

booksrouter.get("/", getAllBooks);
booksrouter.get("/:id", getBookById);
booksrouter.post("/", createBook);
booksrouter.put("/:id", updateBook);
booksrouter.delete("/:id", deleteBook);

export default booksrouter;
