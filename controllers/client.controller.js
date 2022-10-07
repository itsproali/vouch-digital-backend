const Client = require("../models/Client");

exports.getTotalClient = async (req, res, next) => {
  try {
    const total = await Client.countDocuments();
    res.status(200).send({ success: true, data: total });
  } catch (error) {
    next(error);
  }
};

exports.getClient = async (req, res, next) => {
  try {
    const { page, sort } = req.query;
    const limit = 15;
    const clients = await Client.find({}, null, {
      skip: +page * limit,
      limit,
      sort,
    });
    res.status(200).send({ success: true, data: clients });
  } catch (error) {
    next(error);
  }
};

exports.addClient = async (req, res, next) => {
  try {
    await Client.create(req.body);
    res
      .status(200)
      .send({ success: true, message: "Client Added Successfully" });
  } catch (error) {
    next(error);
  }
};
