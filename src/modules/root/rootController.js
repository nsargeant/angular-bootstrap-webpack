import {_module} from 'module'
import appConfig from '../../../app.config.js'

_module.controller('rootController', function(userService) {
  let ctrl = this;
  
  ctrl.title = appConfig.name;
  
  userService.getUser().then(function(user) {
    ctrl.user = user;
  });
});