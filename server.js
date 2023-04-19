import mongoose from "mongoose";
import app from "./app.js";
import { DB_HOST } from "./configuration/config.js";

const HOST = DB_HOST ?? process.env.DB_HOST;

mongoose
  .connect(HOST)
  .then(() => {
    console.log("Database connection successful");
    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000");
    });
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
