const fs = require("fs");
const {
  component,
  barrel,
  styled,
  test,
  types,
} = require("./component_templates.js");

// grab component name from terminal argument
//@ts-ignore
let [name] = process.argv.slice(2);
const generateDirectory = (names) => {
  if (names.includes("/")) {
    //@ts-ignore
    name = names.split("/").pop() ?? names;
  }
  return `src/components/${names}/`;
};
//@ts-ignore
if (!name) throw new Error("You must include a component name.");
const dir = generateDirectory(name);
// throw an error if the file already exists
if (fs.existsSync(dir))
  throw new Error("A component with that name already exists.");
// create the folder
fs.mkdirSync(dir, { recursive: true });
function writeFileErrorHandler(err) {
  if (err) throw err;
}
// component.tsx
fs.writeFile(`${dir}/${name}.tsx`, component(name), writeFileErrorHandler);
// component.styled.tsx
fs.writeFile(`${dir}/${name}.styled.tsx`, styled(name), writeFileErrorHandler);
// component.types.ts
fs.writeFile(`${dir}/${name}.types.ts`, types(name), writeFileErrorHandler);
// test.tsx
fs.writeFile(`${dir}/${name}.test.tsx`, test(name), writeFileErrorHandler);
// index.ts
fs.writeFile(`${dir}/index.ts`, barrel(name), writeFileErrorHandler);
