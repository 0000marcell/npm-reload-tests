// {{../global/header/header.js}}

define(['knockout'], function(ko) {
  var objBinding = {
    title: ko.observable(header.text)
  }
  return objBinding;
});
