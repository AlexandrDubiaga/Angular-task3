var app = angular.module('app');
app.config(function($stateProvider) {
    var helloState = {
      name: 'hello',
      url: '/hello',
      template: '<h3>hello world!</h3>'
    }
  
    var aboutState = {
      name: 'about',
      url: '/about',
      template: '<h3>Its the UI-Router hello world app!</h3>'
    }

    var product = {
        name: 'products',
        url: '/products',
        component: 'products',
        resolve: {
          people: function(myFactory) {
            return myFactory.getList();
          }
        }
      
      
      }

      var oneProduct = {
        name: 'person',
        url: '/products/{personId}',
        component: 'person',
        resolve: {
          person: function(myFactory, $transition$) {
            return myFactory.getPerson($transition$.params().personId);
          }
        }
      
      
      }

    
    
  
    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);
    $stateProvider.state(product);
    $stateProvider.state(oneProduct);
  });