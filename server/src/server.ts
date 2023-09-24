import express, {Request, Response} from "express";
import connectToStorage from "./db";
import userRoutes from "./routes/userRoutes";

const app = express();
app.use(express.json());


const PORT=9100;

connectToStorage();

app.get('/ping', (request: Request, response: Response) => {
    response.send('Pong');
});


app.use('/user', userRoutes);

app.listen(PORT, () => {
    console.log(`AppSuccess: Server running on on ${PORT}`);
}) ;