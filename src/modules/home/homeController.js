import {_module} from "module"

_module.controller('homeCtrl', function(userService) {
  let ctrl = this;
  console.log('inside homeController.js')
  userService.getUser().then(function(user) {
    ctrl.user = user;
  });
});