import mongoose from "mongoose"

mongoose.connect("mongodb+srv://Alura:1234@alura.dqqfi.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;  