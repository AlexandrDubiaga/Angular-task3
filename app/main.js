angular.module('app', ['ui.router'])
var app = angular.module("app")

app.controller('Controller', function($scope) {
    
})

app.factory('myFactory', function(){    
    var products = [{name:'Samanta', phone:'555-1276'},
    {name:'Bob', phone:'800-BIG-MARY'},
    {name:'Mikle', phone:'655-4321'},
    {name:'Angel', phone:'655-5678'},
    {name:'Judi', phone:'655-8765'},
    {name:'Bri', phone:'655-5678'}]

    return {
        getList: function(){return products},
        addList: function(product){
            products.push(product) 
            return products
        }
    }
})

app.component('leftSide', {
    transclude: true,
    bindings: {},
    controller: leftSideController,
    templateUrl: 'left-side.html'
  });

function leftSideController(){

}
app.component('products', {
    bindings: { products: '<' },
 
    template: '<h3>Some people:</h3>' +
              '<ul>' +
              '  <li ng-repeat="prod in $ctrl.products">' +
              '    <a ui-sref="prod({ personId: prod.name })">' +
              '      {{prod.phone}}' +
              '    </a>' +
              '  </li>' +
              '</ul>'
  })

app.directive('myInput', function() {
    return {
      restrict: 'E',
      transclude: true,
      controller: function($scope, myFactory){
        /*
        $scope.$watcher('name',function(){
            myFactory.pushNames($scope.name)
        })
        */
      },
      template: '<p>Who are you looking for?</p><input type="text" ng-model="yourText"></input>'
    };
});

app.directive('myList', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
          yourText:'=filter'
      },
      controller: function($scope, myFactory){
        $scope.friends = myFactory.getList()
      },
      templateUrl: 'my-list.html'
    };
});

app.directive('myAdd', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
      },
      controller: function($scope, myFactory){
        $scope.addName = function(text){
            myFactory.addList(text)
        }
      },
      templateUrl: 'my-add.html'
    };
});