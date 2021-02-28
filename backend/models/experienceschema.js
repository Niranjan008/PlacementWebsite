const mongoose = require('mongoose')
var Schema = mongoose.Schema;
mongoose.connect('mongodb://127.0.0.1:27017/placement-experience-db', {
    useNewUrlParser: true,
    useCreateIndex: true
})
const PlaceExp = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    year: {
        type: String
    },
    company: {
        type: String
    },
    linkedinlink: {
        type: String
    },
    experiencefile: {
        data: Buffer,
        contentType: String
    },
    isverified: {
        type: Boolean
    }
})
module.exports = mongoose.model('experienceschema', PlaceExp)
