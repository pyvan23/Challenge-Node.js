const router = require("express").Router();

const { moviesOrSeries } = require("../dataBase/db");

router.get("/", async (req, res) => {
  console.log(req.userId);
  const movies = await moviesOrSeries.findAll({
    attributes: ["image", "title", "creationDate"],
  });
  res.json(movies);
});

router.post("/", async (req, res) => {
  const movie = await moviesOrSeries.create(req.body);
  res.json(movie);
});

router.put("/:id", async (req, res) => {
  await moviesOrSeries.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({ congrats: "Movie updated." });
});

router.delete("/:id", async (req, res) => {
  await moviesOrSeries.destroy({
    where: { id: req.params.id },
  });
  res.json({ congrats: "Movie deleted." });
});

module.exports = router;
