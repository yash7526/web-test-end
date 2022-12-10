const abc = require("fs");
abc.readFile("./books/AliceInWonderland.txt", "utf-8", file);

function file(e, data) {
    console.log(data);
}