require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");

// import routes
const customerRoutes = require("./routes/api/customerRoutes");
const driverRoutes = require("./routes/api/driverRoutes");

// middleware
const app = express();
app.use(express.json());

// connect to MongoDB
const db = process.env.MONGO_URI;
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("=== Connected to MongoDB ===\n"))
  .catch(err => console.log(err));

// connect routes
app.use("/api/customers/", customerRoutes);
app.use("/api/drivers/", driverRoutes);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`\nServer is running on port ${port}`));
