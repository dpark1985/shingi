
var h3FrameworkFilters = angular.module('h3FrameworkFilters')

.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});
