const fs = require("fs");
const path = require("path");
console.log(process.argv);
if (process.argv[2] === "ng") {
  switch (process.argv[3]) {
    case "g":
    case "generate": {
      switch (process.argv[4]) {
        case "c":
        case "component":
          CreateComponent(process.argv[5]);
          break;
        case "s":
        case "service":
          CreateService(process.argv[5]);
          break;
        default:
          break;
      }
    }
    default:
      break;
  }
}
function CreateComponent(componentName) {
  let skipTests = false;
  let inlineStyle = false;
  let inlineTemplate = false;
  for (const arg of process.argv) {
    switch (arg) {
      case "--skip-tests":
        skipTests = true;
        break;
      case "--inline-style":
        inlineStyle = true;
        break;
      case "--inline-template":
        inlineTemplate = true;
        break;
      default:
        break;
    }
  }
  let readComponentStructure = fs.readFileSync(
    "./Templates/componentTemplate.txt",
    "utf-8"
  );
  let componentStructure = readComponentStructure.replace(
    /componentName/g,
    componentName
  );
  const dirpath = path.join(__dirname, `${componentName}Component`);
  fs.mkdir(dirpath, (err) => {
    if (err) {
      return console.error(err);
    }
    fs.writeFile(
      `./${componentName}Component/app-${componentName}.ts`,
      componentStructure,
      (err) => {
        if (err) throw err;
        console.log("The file was succesfully saved!");
      }
    );
    if (inlineTemplate === false) {
      fs.writeFile(
        `./${componentName}Component/app-${componentName}.html`,
        componentStructure,
        (err) => {
          if (err) throw err;
          console.log("The file was succesfully saved!");
        }
      );
    }
    if (inlineStyle === false) {
      fs.writeFile(
        `./${componentName}Component/app-${componentName}.css`,
        componentStructure,
        (err) => {
          if (err) throw err;
          console.log("The file was succesfully saved!");
        }
      );
    }
    if (skipTests === false) {
      fs.writeFile(
        `./${componentName}Component/app-${componentName}.spec.ts`,
        componentStructure,
        (err) => {
          if (err) throw err;
          console.log("The file was succesfully saved!");
        }
      );
    }
  });
}
function CreateService(c) {
  let readServiceStructure = fs.readFileSync(
    "./Templates/serviceTemplate.txt",
    "utf-8"
  );
  let serviceStructure = readServiceStructure.replace(/serviceName/g, c);
  const dirpath = path.join(__dirname, `${c}Service`);
  fs.mkdir(dirpath, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log("Directory created successfully!");
  });
  fs.writeFile(`./${c}Service/${c}.service.ts`, serviceStructure, (err) => {
    if (err) throw err;
    console.log("The file was succesfully saved!");
  });
}
// --inline-style
//--inline-template
//--skip-tests
