var fs = require('fs');
var path = require('path');

let fileData = fs.readFileSync(path.join(__dirname, 'ohomepage.js'), 
 'utf8');
let partialName,
  partialData;
fileData.match(/{{([^}]+)}}/g).forEach((match) => {
  partialName = match.split('{{')[1].split('}}')[0];
  let partialData = fs.readFileSync(path.join(__dirname, partialName), 
    'utf8');
  partialData = `// ${match.toUpperCase()}\n` + partialData;
  partialData += `// ${match.toUpperCase()}`;
  fileData = fileData.replace(match, partialData);
});

fs.writeFileSync(`test.js`, fileData);
console.log('build complete!');
