var itgamApp = angular.module( 'itgamApp' ,[]);

itgamApp.controller('itgamController', 
  ['$scope',
    function($scope){

      $scope.baseUrl = '/demos/';

      $scope.today = Date.now();

      $scope.selectSuperHero = function(superhero){
        $scope.myhero = superhero;
      }

      $scope.demos = [
        {'title' : 'Data binding' ,       url : '1. Data biding.html'},
        {'title' : 'Ng-repeat' ,          url : '2. Ngrepeat.html'},
        {'title' : 'Formatos' ,           url : '3. Filters.html'},
        {'title' : 'Búsquedas y order' ,  url : '4. Busquedas.html'},
        {'title' : 'Directivas' ,         url : '5. Directivas.html'},
        {'title' : 'Ng-click',            url : '6. Ngclick.html'},
        {'title' : 'Keep in touch' ,      url : '0. A cerca de.html'},
      ];

      $scope.selectDemo = function(index){
        $scope.demo_template = $scope.baseUrl+$scope.demos[index].url;
      }

      $scope.selectDemo(0);

      $scope.superheroes = [
        {'name' :  'Batman',                'realname' : 'Bruce Wayne'      ,'intelligence' : 10, 'strenght' : 4,   'speed' : 3,  'defence' : 8},
        {'name' :  'Spiderman',             'realname' : 'Peter Parker'     ,'intelligence' : 9,  'strenght' : 7,   'speed' : 10, 'defence' : 6},
        {'name' :  'Superman',              'realname' : 'Clark  Kent'      ,'intelligence' : 6,  'strenght' : 10,  'speed' : 8,  'defence' : 10},
        {'name' :  'Hulk',                  'realname' : 'Bruce Banner'     ,'intelligence' : 1,  'strenght' : 10,  'speed' : 4,  'defence' : 9},
        {'name' :  'Thor',                  'realname' : 'Thor'             ,'intelligence' : 3,  'strenght' : 9,   'speed' : 6,  'defence' : 8},
        {'name' :  'Wolverine',             'realname' : 'James Howlett'    ,'intelligence' : 6,  'strenght' : 8,   'speed' : 7,  'defence' : 7},
        {'name' :  'Iceman',                'realname' : 'Bobby Drake'      ,'intelligence' : 7,  'strenght' : 3,   'speed' : 6,  'defence' : 5},
        {'name' :  'Wonder woman',          'realname' : 'Diana Temiscira'  ,'intelligence' : 4,  'strenght' : 9,   'speed' : 7,  'defence' : 3},
        {'name' :  'Quicksilver',           'realname' : 'Pietro Django'    ,'intelligence' : 9,  'strenght' : 5,   'speed' : 10, 'defence' : 5},
        {'name' :  'Aquaman',               'realname' : 'Arthur Curry'     ,'intelligence' : 2,  'strenght' : 7,   'speed' : 5,  'defence' : 4},
        {'name' :  'Captain America',       'realname' : 'Steve Rogers'     ,'intelligence' : 5,  'strenght' : 8,   'speed' : 3,  'defence' : 8},
        {'name' :  'El chapulin colorado',  'realname' : 'Roberto Gomez'    ,'intelligence' : 10, 'strenght' : 10,  'speed' : 10, 'defence' : 10},
      ];

    }
  ]
);


/*Filtro personalizado*/
itgamApp.filter('personalname', function(){
  return function( input , start){
    return input.replace( /(^|\s)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase(); } );
  }
});


/*Directiva*/
itgamApp.directive('heroAvatar',function(){
  return {
    restrict : 'E',
    replace  : true,
    scope :{name:'@' },
    template : "<img />",
    link : function(scope,element,attrs){
      var urlImg    = '/assets/img/superheroes/'
      scope.$watch("name",function(newValue,oldValue) {
        var filename  = attrs.name || "default";
        filename = filename.replace(/\s+/g, '').toLowerCase();

        element.attr({ 
          src : urlImg+filename+'.jpg',
          alt : attrs.name,
          title : attrs.name
        });
      });
    }
  };
});