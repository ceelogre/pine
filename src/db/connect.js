import mongoose from 'mongoose'

const connectOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect('mongodb://localhost:27017/land', connectOptions)