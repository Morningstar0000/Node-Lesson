const os = require("os")

// info about current users
const users = os.userInfo()
console.log(users);

// method returns the system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMen: os.freemem(),
}
console.log(currentOs);