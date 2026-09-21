const fs = require("fs");
fs.writeFileSync("example text", "this is experiment 2 in 150 words");
console.log("create file run successfully");
const data = fs.readFileSync("example.txt", "utf8");
console.log("file content is: ", data);
fs.mkdirSync("sample_folder");
console.log("a new folder is created");
if (fs.existsSync("example.txt")) {
  console.log("file exists");
} else {
  console.log("file not found , need to create this file");
}
