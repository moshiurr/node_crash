const fs = require("fs");
const path = require("path");

//create folder
// fs.mkdir(path.join(__dirname, "test"), {}, err => {
// 	if (err) throw err;
// 	console.log("folder created!\n");
// });

//create and write to a file;
//2nd param is the content will be written to the file
// fs.writeFile(
// 	path.join(__dirname, "test", "hello.txt"),
// 	"This will be written to the file",
// 	err => {
// 		if (err) throw err;
// 		console.log("file created and written");
// 	}
// );

//there is also append method to append to the file.

//Read file
fs.readFile(path.join(__dirname, "test", "hello.txt"), "utf8", (err, data) => {
	if (err) throw err;
	console.log(data);
});
