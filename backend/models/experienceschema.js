const mongoose = require('mongoose')
var Schema = mongoose.Schema;

mongoose.connect('mongodb://admin:admin@18.221.72.173/placementdb', {
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
        type: String
    },

    isverified: {
        type: Boolean
    }
})
module.exports = mongoose.model('experienceschema', PlaceExp)
