import  express ,{Request,Response,Express,Application} from "express";
const app:Express = express();
const port:number = 3000

app.get("/",(req:Request,res:Response)=>{
    res.send("welcome")
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})


export default app;
