const os = require("os");
console.log("free memory" , os.freemem() / 1024/ 1024 / 1024);
console.log("total memory" , os.totalmem() / 1024 / 1024 /1024);
console.log("user info" ,  os.userInfo());
console.log("platform" ,  os.platform());
console.log("processor" , os.cpus());
console.log("processor" , `${os.cpus().length} core`);
console.log(os.uptime());
console.log(os.arch());