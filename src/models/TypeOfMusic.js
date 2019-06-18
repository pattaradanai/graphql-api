import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    name_th: String,
    name_en: String,
    description: String,
    updated_at: {
        type: Date
    },
    created_at: {
        type: Date
    }
    })

const TypeOfMusic = mongoose.model('TypeOfMusic', schema, 'type_of_musics')
export default TypeOfMusic