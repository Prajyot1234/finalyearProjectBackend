const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
let ObjectId = require('mongodb').ObjectId;

const Problem = require('../models/problems');

router.post('/',(req,res)=>{
    const problem = new Problem({
        _id : new mongoose.Types.ObjectId(),
        title : req.body.title,
        statement : req.body.statement,
        testcases : req.body.testcases,
    });

    problem.save().then((result) => console.log("we have added problem successfully"))
        .catch( err => console.log(err));

    res.status(201).json({
        message : "successfully added problem to database",
        createdProblem : problem
    });
}); 

router.get('/',(request,respose) => {
    Problem.find({}).then((res)=> {
        respose.status(200).json({
            message : "successfully getting all the data",
            data : res
        })
    })
});

router.post('/withId',(request,respose) => {
    const  { id } = request.body.params;
    console.log("request body ",request.body);
    Problem.findById(ObjectId(id)).then((res)=> {
        respose.status(200).json({
            message : "successfully getting all the data",
            data : res
        })
    }).catch((err)=>console.log(err));
});

module.exports = router;