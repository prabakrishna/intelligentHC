console.log('Inside');
const  express=require('express');
const router = express.Router();
const pg = require('pg');
const path=require('path');
const connection = 'postgres://postgres:postgres@localhost:5432/ApbFlow';

var client=new pg.Client(connection);
client.connect();
console.log('Connected');

exports.getIterations = (req,res)=>{
    console.log('Hi i am');
        const iterations=[];
        const query = client.query('SELECT IterationId, status FROM Iteration');
        query.on('row',(row)=>{
            console.log(row);
            iterations.push(row);
        });
        query.on('end',()=>{
            return res.json(iterations);
        })
        
}