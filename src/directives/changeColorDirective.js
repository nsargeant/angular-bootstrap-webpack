import {_module} from "module"

_module.directive('changeColor', function() {
  return {
    link: function(scope, el, attr) {
      var i = 0;
      let getNextColor = () => {
        i++;
        switch (i % 3) {
          case 0:
            return 'red';
          case 1:
            return 'green';
          case 2:
            return 'blue';
        }
      }

      let changeColor = () => {
        el.css('color', getNextColor());
      }

      el.on('mouseover', changeColor);

      scope.$on('$destroy', function() {
        el.off('mouseover');
      });

    }
  }
});