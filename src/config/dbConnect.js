import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB);

let db = mongoose.connection;

export default db;