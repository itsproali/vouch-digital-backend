const { getToken } = require("../controllers/user.controller");

const router = require("express").Router();

router
  /**
   * @api {get} Get Access Token
   * @apiSuccess {Object} {success: true, data: token}
   *
   * @apiError {Object} status = 400 {success: false, }
   */

  .post("/get-token", getToken);

module.exports = router;
