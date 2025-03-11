import pool from "../config/db";

class Book {
  static async getAllBooks() {
    const { rows } = await pool.query("SELECT * FROM books");
    return rows;
  }

  static async getBookById(id: number) {
    const { rows } = await pool.query("SELECT * FROM books WHERE id = $1", [
      id,
    ]);
    return rows[0];
  }

  static async createBook(
    title: string,
    author: string,
    published_year: number,
    genre: string
  ) {
    const { rows } = await pool.query(
      "INSERT INTO books (title, author, published_year, genre) VALUES ($1, $2, $3, $4) RETURNING *",
      [title, author, published_year, genre]
    );
    return rows[0];
  }

  static async updateBook(
    id: number,
    title: string,
    author: string,
    published_year: number,
    genre: string
  ) {
    const { rows } = await pool.query(
      "UPDATE books SET title=$1, author=$2, published_year=$3, genre=$4 WHERE id=$5 RETURNING *",
      [title, author, published_year, genre, id]
    );
    return rows[0];
  }

  static async deleteBook(id: number) {
    const { rows } = await pool.query(
      "DELETE FROM books WHERE id=$1 RETURNING *",
      [id]
    );
    return rows[0];
  }
}

export default Book;
