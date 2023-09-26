import { join, resolve } from "path";

// get the absolute path of a file
const p : string = resolve("mytext.txt")
// join paths
const p2 : string = join("folder","subfolder","file.txt")
console.log(p,p2);
