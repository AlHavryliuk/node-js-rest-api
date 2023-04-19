import mongoose from "mongoose";
// import app from "./app.js";

// const HOST = process.env.DB_HOST;
const DB_HOST =
  "mongodb+srv://havryliuk:jxvZCQfm2Fa5gZR2@cluster0.5fdb83j.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful");
    // app.listen(3000, () => {
    //   console.log("Server running. Use our API on port: 3000");
    // });
  })
  .catch((err) => {
    console.log(err.message);
    // process.exit(1)
  });
