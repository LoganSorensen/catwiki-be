const router = require("express").Router();

const catsAPI = require("../../utils/catsAPI");

router.get("/", (req, res) => {
  catsAPI()
    .get("/breeds")
    .then((response) => {
      const names = [];
      response.data.forEach((cat) => {
        names.push(cat.name);
      });
      res.status(200).json(names);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
