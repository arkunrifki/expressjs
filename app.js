const express = require("express");
const app = express();
const port = 3000;
const categoriesRouter = require("./routes/categories");
const morgan = require("morgan");

// Middleware untuk parsing body dari permintaan
app.use(express.json());
//============================================================
// app.use((req, res, next) => {
//   //   console.log("Hello ini dari Middleware😂");
//   req.requestTime = new Date().toISOString();
//   next();
// });
//============================================================
//==how to use third party app package to know end point used=
app.use(morgan("dev"));

//Routing
app.use("/api/v1/categories", categoriesRouter);

//server
app.listen(port, () => {
  console.log(`server berjalan di port ${port}`);
});
