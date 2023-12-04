import User from "./user.js";
import U, { printName as printUserName, printAge } from "./user.js";

const user = new User("Johnes", 39);
console.log(user);

printUserName(user)
printAge(user)