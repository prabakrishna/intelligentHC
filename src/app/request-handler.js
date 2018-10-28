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
            console.log("success");
            return res.json(iterations);
        })
        
}


router.get('', (req, res, next) => {
    const results = [];
    // Get a Postgres client from the connection pool
    pg.connect(connectionString, (err, client, done) => {
      // Handle connection errors
      if(err) {
        done();
        console.log(err);
        return res.status(500).json({success: false, data: err});
      }
      // SQL Query > Select Data
      const query = client.query('SELECT IterationId, status FROM Iteration');
      // Stream results back one row at a time
      query.on('row', (row) => {
        results.push(row);
      });
      // After all data is returned, close connection and return results
      query.on('end', () => {
        done();
        console.log("got resuts from db");
        return res.json(results);
      });
    });
  });