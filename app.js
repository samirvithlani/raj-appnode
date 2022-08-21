const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRoute = require("./routes/UserRoutes");
const bodyParser = require("body-parser");

app.listen(3000, () => {
  console.log("Server started at port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://samir:samir123@cluster0.key63fx.mongodb.net/?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);
app.use("/user", userRoute);
//post --> JSON


