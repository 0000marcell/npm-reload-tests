define(['knockout', 'ohomepage'], function (ko, ohomepage) {
  ko.applyBindings(ohomepage);
  ohomepage.onLoad();
  ohomepage.resourcesLoaded();
  ohomepage.beforeAppear();
});
