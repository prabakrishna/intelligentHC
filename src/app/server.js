console.log("hi");
const {Pool, Client} =require('pg')
const express = require('express');
const router = express.Router();
const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'ApbFlow',
    password:'postgres',
    port:5432

})

router.post('/api/open',function(req,res,next){
   /* console.log("Inside post");
    const text='SELECT "IterationId", status FROM "Iteration";';
    pool.query(text,(err,res)=>{
        if(err){
            console.log(err.stack);

        }
        else{
console.log("Result is  "+res);
for(var i=0;i<res.rows.length;i++){
    console.log("res rows"+res.rows[i]);
}
        }
        res.json(res.rows[i].toString());
    })*/
    const iterations=[];
        const query = client.query('SELECT IterationId, status FROM Iteration');
        query.on('row',(row)=>{
            console.log(row);
            iterations.push(row);
        });
        query.on('end',()=>{
            return res.json(iterations);
        })
        
});