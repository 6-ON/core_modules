import { Server, createServer } from "http";

const server :Server = createServer((req,res)=>{

    res.statusCode = 200
    res.setHeader("Content-Type","application/json");
    if (req.url === '/test') {
        res.write(JSON.stringify({
            name : "hello from node"
        })) 
    }else{
        res.write(JSON.stringify({
            name : "home"
        })) 

    }
    res.end()
})

server.listen(8000,()=>{
    console.log("server started");
})