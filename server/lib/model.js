const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const project = new Schema({
    title:String, 
    description:String,
    image: String,
    repo:String,
    website:String,
    type:String,
    languages:[String]
});

const projectModel = mongoose.model('project', project);

module.exports = projectModel;