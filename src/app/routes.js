const router = require('express').Router();
console.log('Wow');
const  requestHandler = require('./request-handler.js');
router.get("/api/open",requestHandler.getIterations);
//const  requestHandler = require('./server.js');
module.exports=router;