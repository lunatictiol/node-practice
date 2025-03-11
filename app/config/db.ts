import { Pool } from "pg";

const pool = new Pool({
  user: "myuser",
  host: "localhost", // If running inside Docker container, use the service name: "postgres"
  database: "mydatabase",
  password: "mypassword",
  port: 5432, // Default PostgreSQL port
});

pool
  .connect()
  .then(() => console.log("Connected to PostgreSQL!"))
  .catch((err: Error) => console.error("Connection error:", err));

export default pool;
