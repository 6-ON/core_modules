import EventEmitter from "events";

const ev:EventEmitter = new EventEmitter()
// listen to event
ev.on("connected",(username)=>{
    console.log("user connected " + username);
    
})
// trigger event
ev.emit("connected","amine")