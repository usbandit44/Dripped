const express = require("express");
const app = express();
const cors = require("cors");

app.listen(3000);
app.use(express.json());
app.use(cors());

const clothingRouter = require("./routes/clothing.js");

app.use("/clothing", clothingRouter);
