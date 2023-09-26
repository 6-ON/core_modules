import { appendFile, readFile } from "fs";

readFile("mytext.txt","utf-8",(err,data)=>{
    console.log(data);
})