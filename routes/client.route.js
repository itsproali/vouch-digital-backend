const { getClient, addClient, getTotalClient } = require("../controllers/client.controller");

const router = require("express").Router();

router
/**
   * @api {get} Get total clients
   * @apiSuccess {Object} {success: true, data: total}
   *
   * @apiError {Object} status = 400 {success: false, }
   */
.get("/total", getTotalClient)

router.route("/")
/**
   * @api {get} Get all clients
   *
   * @apiQuery  Optional: page, sort
   * @apiSuccess {Object} {success: true, data: clients}
   *
   * @apiError {Object} status = 400 {success: false, }
   */
.get(getClient)
/**
   * @api {post} Add a New client
   *
   * @apiBody   Details about clients. companyName, email, logo, website, person etc
   * @apiSuccess {Object} {success: true, message: "Client Added successfully"}
   *
   * @apiError {Object} status = 400 {success: false, }
   */
.post(addClient);


module.exports = router;
