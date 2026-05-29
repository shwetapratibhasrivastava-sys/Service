import express from "express";
import {
  createService,
  deleteService,
  getService,
  getServiceById,
  updateService,
} from "../controllers/serviceController.js";
import authMiddleware from "../middleware/authMiddleware.js"

const serviceRoute = express.Router();

serviceRoute.post("/", authMiddleware,createService);
serviceRoute.get("/",authMiddleware ,getService);
serviceRoute.get("/:id",authMiddleware, getServiceById);
serviceRoute.put("/:id", authMiddleware,updateService);
serviceRoute.delete("/:id",authMiddleware, deleteService);

export default serviceRoute;