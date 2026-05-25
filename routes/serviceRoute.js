import express from "express";
import {
  createService,
  deleteService,
  getService,
  getServiceById,
  updateService,
} from "../controllers/serviceController.js";

const serviceRoute = express.Router();

serviceRoute.post("/", createService);
serviceRoute.get("/", getService);
serviceRoute.get("/:id", getServiceById);
serviceRoute.put("/:id", updateService);
serviceRoute.delete("/:id", deleteService);

export default serviceRoute;