import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  single_name: String,
  thumbnail: String,
  description: String,
  lyrics: String,
  melody: String,
  arrange: String,
  artists: String,
  lyric_musics : String,
  type_of_music : [String],
  artists : [String],
  albums : [String],
  release_date: {
    type: Date
  },
  updated_at: {
    type: Date
  },
  created_at: {
    type: Date
  }
})

const Single = mongoose.model('Single', schema, 'singles')
export default Single