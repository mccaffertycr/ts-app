import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const NoteSchema = new Schema({
  title: {
    type: String,
    required: 'enter a title'
  },
  body: {
    type: String,
    required: 'must enter the url string for the note'
  },
  created_date: {
    type: Date,
    default: Date.now
  }
})