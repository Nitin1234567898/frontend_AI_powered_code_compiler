const express = require("express");
const router = express.Router();

router.route("/explain").post(explain);
router.route("/complexity").post(complexity);
router.route("/notes").post(notes);
router.route("/prompt").post(prompt);


module.exports = router;