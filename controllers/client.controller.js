const Client = require("../models/Client");

// Get Total Client Number in the client list
exports.getTotalClient = async (req, res, next) => {
  try {
    const total = await Client.countDocuments();
    res.status(200).send({ success: true, data: total });
  } catch (error) {
    next(error);
  }
};

// Get all the clients from clients collection
exports.getClient = async (req, res, next) => {
  try {
    const { page, sort } = req.query;
    const limit = 5; // For Testing Pagination Used 5 data per page
    // For testing purpose get all the data without any query
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

// Add New client to the database
exports.addClient = async (req, res, next) => {
  try {
    console.log(req.body);
    await Client.create(req.body);
    res
      .status(200)
      .send({ success: true, message: "Client Added Successfully" });
  } catch (error) {
    next(error);
  }
};
