import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    artist_name: String,
    artist_name_en: String,
    artist_type:String,
    description: String,
    singles : [String],
    updated_at: {
        type: Date
    },
    created_at: {
        type: Date
    }
    })

const Artist = mongoose.model('Artist', schema, 'artists')
export default Artist