angular.
module('appmodule.factories',[])
.factory('Iterarion', Iteration);

Iteration.$inject=['$http'];

function Iteration($http){
    var self = this;
    self.getOpen = getOpen;

    function getOpen(){
        return $http.get('/http://localhost:4000/')
        .then(function(res){
            return res.data;
        });
    };
};