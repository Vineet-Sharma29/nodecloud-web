const express = require("express");
const app = express();
const cors = require("cors");

app.set("port", process.env.PORT || 4000);
app.use(express.static("public"));
app.use(cors());

// const db = require("../server/db");

const authRoutes = require("./routes/auth");
app.use("/", authRoutes);
const serviceRoutes = require("./routes/getServices");
app.use("/", serviceRoutes);

app.get("/", function(req, res) {
  return res.redirect("/login");
});

app.listen(app.get("port"), () => {
  console.log("Listening to port: ", app.get("port"));
});