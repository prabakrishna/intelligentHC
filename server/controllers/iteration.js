Iteration = require('../models/').iteration;

module.exports={

  //get a list of iterations
  index(req,res){
    Iteration.findAll().then(function(iterations){
      res.status(200).json(iterations);
    })
    .catch(function(error){
      res.status(500).json(error) 
       })
  }
}