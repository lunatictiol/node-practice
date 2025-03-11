import { Request, Response } from "express";
import asyncHandler from "../utils/AsycHandler";
import Book from "../models/books.model";

// Get all books
export const getAllBooks = asyncHandler(async (req: Request, res: Response) => {
  const books = await Book.getAllBooks();
  res.json(books);
});

// Get a book by ID
export const getBookById = asyncHandler(async (req: Request, res: Response) => {
  const book = await Book.getBookById(parseInt(req.params.id));
  if (!book) {
    res.status(404).json({ error: "Book not found" });
    return;
  }
  res.json(book);
});

// Create a new book
export const createBook = asyncHandler(async (req: Request, res: Response) => {
  const { title, author, published_year, genre } = req.body;
  if (!title || !author) {
    res.status(400).json({ error: "Title and Author are required" });
    return;
  }

  const newBook = await Book.createBook(title, author, published_year, genre);
  res.status(201).json(newBook);
});

// Update an existing book
export const updateBook = asyncHandler(async (req: Request, res: Response) => {
  const { title, author, published_year, genre } = req.body;
  const updatedBook = await Book.updateBook(
    parseInt(req.params.id),
    title,
    author,
    published_year,
    genre
  );
  if (!updatedBook) {
    res.status(404).json({ error: "Book not found" });
    return;
  }
  res.json(updatedBook);
});

// Delete a book
export const deleteBook = asyncHandler(async (req: Request, res: Response) => {
  const deletedBook = await Book.deleteBook(parseInt(req.params.id));
  if (!deletedBook) {
    res.status(404).json({ error: "Book not found" });
    return;
  }
  res.json({ message: "Book deleted successfully", deletedBook });
});
