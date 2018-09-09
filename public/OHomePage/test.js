// // {{../GLOBAL/HEADER/HEADER.JS}}
var header = {
  text: 'Header Text!'
}
// {{../GLOBAL/HEADER/HEADER.JS}}

define(['knockout'], function(ko) {
  var objBinding = {
    title: ko.observable(header.text)
  }
  return objBinding;
});
