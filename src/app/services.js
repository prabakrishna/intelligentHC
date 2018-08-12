angular.
module('appmodule.factories',[])
.factory('Iterarion', Iteration);

Iteration.$inject=['$http'];

function Iteration($http){
    var self = this;
    self.getOpen = getOpen;

    function getOpen(){
        return $http.get(  '/api/open')
        .then(function(res){
            return res.data;
        });
    };
};