import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    name: String,
    first_name: String,
    last_name:String,
    nick_name:String,
    birthday:String,
    description: String,
    updated_at: {
        type: Date
    },
    created_at: {
        type: Date
    }
    })

const Singer = mongoose.model('Singer', schema, 'singers')
export default Singer