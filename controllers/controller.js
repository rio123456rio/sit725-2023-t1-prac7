let collection = require('../models/receipe');

const postReceipe = (req,res) => {
    let receipe = req.body;
    collection.postReceipe(receipe, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

const getAllReceipes = (req,res) => {
    collection.getAllReceipes((error,result)=>{
        if (!error) {
            res.json({statusCode:200,data:result,message:'success'});
        }
    });
}

const deleteReceipe = (req,res) => {
    let receipe = req.body;
    collection.deleteOne(receipe, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

module.exports = {postReceipe,getAllReceipes}