import { Request, Response } from "express";
import Category from "../models/categoryModel";



export const getAllCategories = async (request: Request, response: Response) => {

    try {
        const categories = await Category.find();

        return response.send(categories);        
    } catch (error) {
        console.log(`AppError: Get_Categories ${error}`);
        throw error; 
    }

}

export const createCategory = async (request: Request, response: Response) => {
    try {
        
    } catch (error) {
        
    }
}