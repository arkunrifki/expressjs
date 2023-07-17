const express = require("express");
const router = express.Router();
const {
  getAllCategories,
  storeCategory,
} = require("../controllers/categoryControllers");

// /api/v1/categories;
//Routing
router.get("/", getAllCategories);

router.post("/", storeCategory);

// router.post("/", (req, res) => {
//   res.send("Respons dari method post!!!!!");
// });

// /api/v1/categories/fillterdata;
//Jika fillterdata diletakkan diatas routes parameter maka akan menjadi params
router.get("/fillterdata", (req, res) => {
  res.send("route fillter data");
});

// /api/v1/categories/:name;
//Router parameter .. mengambil nilai dari parameter
//Misalkan mempunyai banyak parameteer
router.get("/:name", (req, res) => {
  res.send(`ini endpoint dari route params ${req.params.name}`);
});

module.exports = router;
