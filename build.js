var fs = require('fs');
var path = require('path');

return module.exports = {
  build: function(src, dest) {
    let fileData = fs.readFileSync(path.join(__dirname, src), 
   'utf8');
    let partialName,
      partialData;
    fileData.match(/{{([^}]+)}}/g).forEach((match) => {
      partialName = match.split('{{')[1].split('}}')[0];
      let partialData = fs.readFileSync(path.resolve(path.dirname(src), partialName), 
        'utf8');
      partialData = `// ${match.toUpperCase()}\n` + partialData;
      partialData += `// ${match.toUpperCase()}`;
      fileData = fileData.replace(match, partialData);
    });
    fs.writeFileSync(dest, fileData);
    console.log(`build ${src}`);
  } 
}
