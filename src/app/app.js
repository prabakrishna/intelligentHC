/*angular.module('appmodule',[
    'appmodule.factories',
    'appmodule.open',
    'appmodule.archive',
    'ngRoute'
])
.config(config);

config.$inject = ['$routeProvider'];
function config($routeProvider){
        $routeProvider.when
        ('/open',{
            templaterUrl:'./container-module/container-module.component.html',
            controller:'ContainerController'
        });
}*/

var express=require('express'),
    path=require('path'),
    bodyParser = require('body-parser'),
    cons = require('consolidate'),
    dust=require('dustjs-helpers'),
    pg = require('pg'),
    app=express();

    var connect1 = "postgres://postgres:postgres@localhost:5432/ApbFlow";

    app.engine('dust',cons.dust);

    app.set('view engine','dust');
    app.set('views',__dirname+'/views');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:false}));
 
    app.get('/',function(req,res){        
        pg.connect(connect1, function(err,client,done){
            if(err){
                return console.error(' Error fetching details',err);
            }
            client.query('SELECT IterationId, status FROM Iteration', function(err,result){
                if(err){
                    return console.error ('Error running query', err);                        
                }
                res.render('layout', {iterations:result.rows});
                done();
            });
        });
        
    });
    app.listen(3000,function(){
        console.log('Server started in port 3000');
    });
