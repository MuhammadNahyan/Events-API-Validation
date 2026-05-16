const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");

const PORT = process.env.PORT || 5000;
const DB_URI = process.env.MONGO_DB_URI || "mongodb://127.0.0.1:27017/events-api";

mongooose.connect(DB_URI, { family: 4 })
    .then(() => console.log("Database Connected"))
    .catch(err => console.error("Database connection failed", err.message));

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})