

angular.module('starter', ['ionic', 'ionicApp']) //(2)

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {

      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

//(1)
.config(function($stateProvider, $urlRouterProvider){
$stateProvider
.state('list',{
  url:'/list',
  templateUrl:'templates/list.html',
  controller:'AppCtrl'
})

//(3)
$urlRouterProvider.otherwise('/list');

});