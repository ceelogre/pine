import '../db/connect'
import mongoose from 'mongoose';
import msgs from '../helpers/jsonReader'

const userSchema = {
    name: {
        type: String,
        required: [ true, msgs.missingName]
    },
    key: {
        type: String,
        required: [ true, msgs.missingKey]
    }
}
const userModel = mongoose.model('user', userSchema)

module.exports = userModel