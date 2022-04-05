const S = require("sequelize");
const db = require("../db");

class WorkDay extends S.Model {}

WorkDay.init(
  {
    date:{
      type: S.DATEONLY 
    },
    entryHour: {
      type: S.DATE,
    },
    wishEntryHour: {
      type: S.DATE, 
    },
    closingHour: {
      type: S.DATE,
    },
    wishClosingHour: {
      type: S.DATE,
    },
    serverHourEntry: {
      type: S.DATE,
      defaultValue: S.NOW,
    },
    serverHourClosing: {
      type: S.DATE,
      defaultValue: S.NOW,
    },
    status: {
      type: S.BOOLEAN,
    },
    comment: {
      type: S.TEXT,
    },
    date: {
      type: S.DATEONLY,
    },
    imageSecurity: {
      type: S.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "workDay",
  }
);

WorkDay.sync({ alter: true })

module.exports = WorkDay;
