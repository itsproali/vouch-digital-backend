const { getClient, addClient, getTotalClient } = require("../controllers/client.controller");

const router = require("express").Router();

router.get("/total", getTotalClient)

router.route("/").get(getClient).post(addClient);


module.exports = router;
