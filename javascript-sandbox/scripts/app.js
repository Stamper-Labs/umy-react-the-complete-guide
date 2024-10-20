const hobbies = ["work", "drink"];
const fname = "german";

function modifier(hobbies, fname) {
  hobbies.push("sleep");
  fname = "valentina";
  console.log("print out from modifier function: ", fname);
}

modifier(hobbies, fname);

console.log(hobbies);
console.log(fname);
