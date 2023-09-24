import { Request, Response } from "express";
import User from "../models/userModel";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Types } from "mongoose";

const getUserToken = (_id: string|Types.ObjectId) => jwt.sign({ _id }, 'express', { expiresIn: '30m' });

export const createUser = async (request: Request, response: Response) => {
    try {
        const {name, email, password} = request.body;

        const isExistingUser = await User.findOne({email});

        if (isExistingUser) {
            return response.status(409).send(`Email already exist2`);
        }

        const encryptedPass = await bcrypt.hash(password, 12);

        const user = await User.create({
            name,
            email,
            password : encryptedPass
        });

        return response.status(201).send(`User created successfully`);
    } catch (error) {
        console.log(`AppError: Create_User ${error}`);
        throw error; 
    }
};


export const loginUser = async (request: Request, response: Response) => {

    try {
        const {email, password} = request.body;
        
        const user = await User.findOne({ email });
        console.log('data---', (await user).password);
        const isValidLogin = await bcrypt.compare(password, ( await user).password);

        if (isValidLogin) {
            const token = getUserToken((await user)._id);

            return response.send({
                token,
                user: {
                    email: (await user).email,
                    name: (await user).name,
                }
            });
        }

        return response.status(400).send({message: 'Wrong credentials'});

    } catch (error) {
        console.log(`AppError: Login_User ${error}`);
        throw error; 
    }

}