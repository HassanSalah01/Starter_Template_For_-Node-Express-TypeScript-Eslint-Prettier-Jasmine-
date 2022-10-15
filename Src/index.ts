import express, { Request, Response, Application } from "express";
import dotenv from "dotenv";
const app: Application = express();
dotenv.config();

const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello World !!");
});

app.listen(PORT, () => {
    console.log(`Server Is Running On Port ${PORT}`);
});

export default app;
