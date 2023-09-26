import { cpus, freemem, platform, totalmem } from "os";


console.log(totalmem(),platform(),freemem(),cpus());
