import express from "express";
import { getAllCategories } from "../controllers/categoryController";


const categoryRoutes = express.Router();

categoryRoutes.route('/').get(getAllCategories);



export default categoryRoutes;