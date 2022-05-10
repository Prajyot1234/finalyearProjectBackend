const mongoose = require('mongoose');
const { Schema } = mongoose;

const testcaseSchema = mongoose.Schema({
    testcase : { type : String },
    output : { type : String },
    checkOutput : { type : String },
});

const problemSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    title : String,
    statement : String,
    testcases : [testcaseSchema]
})

module.exports = mongoose.model('Problem',problemSchema);