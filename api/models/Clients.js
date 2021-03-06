const S = require("sequelize");
const db = require("../db");

class Client extends S.Model {}

Client.init(
  {
    CUIT: {
      type: S.BIGINT,
    },
    bussinessName: {
      type: S.STRING,
    },
    email: {
      type: S.STRING,
      validate: {
        isEmail: true,
      },
    },
    status: {
      type: S.BOOLEAN,
      defaultValue: true,
    },
    legalAddress: {
      type: S.STRING,
    },
    startContratDate: {
      type: S.DATE,
    },
    endContratDate: {
      type: S.DATE,
    },
    city: {
      type: S.STRING,
    },
    province: {
      type: S.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "client",
  }
);

Client.sync({ alter: false });

module.exports = Client;
