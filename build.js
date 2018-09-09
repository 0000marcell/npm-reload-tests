var fs = require('fs');
var path = require('path');

var files = ['./public/OHomePage', './public/OLoginPage'];

module.exports = {
  buildAll: function() {
    files.forEach((file) => {
      let pageName = path.basename(file).toLowerCase();
      let src = file.
      this.build(src, dist);  
    });
  },
  replacePartial: function(src, dest) {
    console.log('is path absolute: ', path.isAbsolute(src));
    if(!path.isAbsolute(src)) 
      src = path.join(__dirname, src);
    let fileData = fs.readFileSync(src, 
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
