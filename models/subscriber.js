const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema( {
    name: {
        type: String,
        required: true
    },
    subscribedToChannel: {
        type: String,
        required: true
    },
    subscribeDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

//first: model name in our database second:schema corresponds to our model
//reason we need this function is because when we export & import in a diff file, this model allows us to interact with the database using this schema
module.exports = mongoose.model('Subscribers', subscriberSchema) 