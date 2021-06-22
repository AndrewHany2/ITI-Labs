const http = require("http");
const fs = require("fs");
const path = require("path");

let files = [];
const directoryPath = path.join(__dirname, "resources");
fs.readdir(directoryPath, (error, f) => {
  if (error) {
    console.error(error);
  } else {
    files = f;
  }
});
const server = http.createServer((req, res) => {
  let html = "";
  if (req.url === "/") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    files.forEach((fileName) => {
      html += `<a href="${fileName}">${fileName}</a><br>`;
    });
    res.write(html);
    res.end();
  } else {
    files.forEach((file) => {
      if (req.url.replace("/", "") == file) {
        fs.promises.readFile(`${directoryPath}/${file}`).then((f) => {
          res.write(f);
          res.end();
        });
      }
    });
  }
});
server.listen(8000, () => {
  console.log("server is listening");
});
// const server = http.createServer((req, res));
