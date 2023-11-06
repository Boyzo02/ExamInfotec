const express = require("express");
const serverResponses = require("../utils/helpers/responses");
const messages = require("../config/messages");
const { Budget } = require("../models/componets/budget");
const routes = (app) => {
  const router = express.Router();


  router.post("/budget", (req, res) =>{
    const budget = new Budget({
      AñoEnd: req.body.AñoEnd,
      AñoStart: req.body.AñoStart,
      DetallePresupuesto: req.body.DetallePresupuesto,
      FechaRegistro: req.body.DateActual,
      total: req.body.total,
      TipoCambioDolar: req.body.ConversionDollar
    })
    budget
    .save()
    .then((result) =>{
      serverResponses.sendSuccess(res, messages.SUCCESSFUL, result);      
    })
    .catch((e) => {
      serverResponses.sendError(res, messages.BAD_REQUEST, e);
    });
  })

  
  router.get("/budgets", (req, res) => {
    Budget.find({}, { __v: 0 })
      .then((componets) => {
        serverResponses.sendSuccess(res, messages.SUCCESSFUL, componets);
      })
      .catch((e) => {
        serverResponses.sendError(res, messages.BAD_REQUEST, e);
      });
  });

  router.get("/budget/last", (req, res) => {
    Budget.findOne().sort({'FechaRegistro': -1})
      .then((componets) => {
        serverResponses.sendSuccess(res, messages.SUCCESSFUL, componets);
      })
      .catch((e) => {
        serverResponses.sendError(res, messages.BAD_REQUEST, e);
      });
  });

  //it's a prefix before api it is useful when you have many modules and you want to
  //differentiate b/w each module you can use this technique
  app.use("/api", router);
};
module.exports = routes;
