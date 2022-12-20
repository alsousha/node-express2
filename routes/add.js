const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("add", {
    title: "Add page",
    isAdd: true,
  });
});

//form with post
router.post("/", (req, res) => {
  console.log(req.body);
  res.redirect("/courses"); //after form redirect to courses page
});

module.exports = router;
