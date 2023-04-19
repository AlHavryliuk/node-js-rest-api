import mongoose from "mongoose";
import app from "./app.js";
import { DB_HOST } from "./configuration/config.js";

app.listen(3000, () => {
  console.log("Server running. Use our API on port: 3000");
});

mongoose
  .connect(DB_HOST)
  .then(() => console.log("Database connection successful"))
  .catch((err) => console.log(err.message));
