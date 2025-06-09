//OS module
const os = require("os");
//info about current user
const user = os.userInfo();
console.log(user);

//method returns the system uptime is seconds
console.log(`the system uptime is ${os.uptime()} seconds`);

//current os info
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMen: os.freemem(),
}
console.log(currentOS)