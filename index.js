const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
const cors = require("cors");

app.use(cors());
app.use(express.json());
const apiRoutes = require("./routers/apiRoutes");
const port = process.env.PORT || 3000;

app.use("/api/", apiRoutes);

const server = app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
