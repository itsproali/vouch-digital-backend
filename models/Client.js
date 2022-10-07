const mongoose = require("mongoose");
// const { ObjectId } = require("mongoose.Schema.Types");

const clientSchema = mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    website: String,
    logo: String,
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    person: {
      type: String,
      required: true,
    },
    facilitator: String,
    sites: Number,
    tenants: Number,
    tenantsGroup: Number,
  },
  { timestamps: true }
);

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
