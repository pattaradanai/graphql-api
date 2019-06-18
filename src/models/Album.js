import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  album_name: String,
  description: String,
  singles : [String],
  artists : [String],
  updated_at: {
    type: Date
  },
  created_at: {
    type: Date
  }
})

const Album = mongoose.model('Album', schema, 'albums')
export default Album