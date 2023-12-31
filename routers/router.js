let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');

router.post('/', function(req,res){
    controller.postReceipe(req,res);
});

router.get('/', (req,res)=>{
    controller.getAllReceipes(req,res);
});

router.delete('/', (req,res)=>{
    controller.getAllReceipes(req,res);
});


module.exports = router;