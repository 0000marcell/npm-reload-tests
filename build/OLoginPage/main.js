define(['knockout', 'ologinpage'], function (ko, ologinpage) {
  ko.applyBindings(ologinpage);
  ologinpage.onLoad();
  ologinpage.resourcesLoaded();
  ologinpage.beforeAppear();
});
