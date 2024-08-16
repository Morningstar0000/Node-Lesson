// commonjs, every file is a modules(By default)
// Modules
const name = require("./names")
const sayHi = require("./utlis")
const data = require("./alternative")
require("./mind-grenade")


sayHi("susan")
sayHi(name.john) 
sayHi(name.peter)