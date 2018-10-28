
       var express = require('express');
        var pg = require("pg");
        var app = express();
        const router = express.Router();       
        const config = {
            user: 'postgres',
            database: 'ApbFlow',
            password: 'postgres',
            port: 5432
        };
        var pool = new pg.Pool(config);        
        app.get('/', function (req, res, next) {
                pool.connect();
               pool.query("select * from Gallery", function(err,result) {              
                   if(err){
                       console.log(err);
                       res.status(400).send(err);
                   }
                   
                   res.status(200).send(result.rows);
               });
        });

        app.get('/Iteration',function(req,res,next){
            pool.connect();
            pool.query("select * from Iteration", function (err,result){
                if(err){
                    console.log(err);
                    res.status(400).send(err);
                }
                console.log("Incoming");
                res.header("Access-Control-Allow-Origin", "*");
                res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");               
                res.status(200).send(result.rows);
            });
        });
        
        app.listen(4000, function () {
            console.log('Server is running.. on Port 4000');
        });

        //Response Handling
        let response = {
            status:200,
            data:[],
            message:null
        }
        router.get("/getIterationList",(req,res)=>{
            alert(111);
            pool.connect();
            pool.query("select * from Iteration", function (err,result){
                if(err){
                    console.log(err);
                    res.status(400).send(err);
                }
               response.data=result.rows;
                res.json(response);
            });
        });

        module.exports=router;