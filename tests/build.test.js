var build = require('../build');

var files = ['./public/O']

test('build all the pages', function(){
  expect(build.buildAll()).toBe(true); 
});
