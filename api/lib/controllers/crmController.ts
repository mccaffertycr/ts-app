import * as mongoose from 'mongoose';
import { NoteSchema } from '../models/crmModel';
import { Request, Response } from 'express';

const Note = mongoose.model('Note', NoteSchema);

  export class NoteController{
    public getNotes (req: Request, res: Response) {
      Note.find({}, (err, notes) => {
        if (err) {
          res.send(err);
        }
        res.json(notes);
      })
    }

    public addNewNote (req: Request, res: Response) {
      let newNote = new Note(req.body);

      newNote.save((err, note) => {
        if (err) {
          res.send(err);
        }
        res.json(note);
      });
    }
    
    public noteWithID (req: Request, res: Response) {
      Note.findById(req.params.id, (err, note) => {
        if (err) {
          res.send(err);
        }
        res.json(note);
      })
    }

    public updateNote (req: Request, res: Response) {
      Note.findOneAndUpdate({ _id: req.params.id }, 
        req.body, { new: true }, (err, note) => {
          if (err) {
            res.send(err);
          }
          res.json(note);
      })
    }

    public deleteNote (req: Request, res: Response) {
      Note.remove({ _id: req.params.id }, (err, note) => {
        if (err) {
          res.send(err);
        }
        res.send('successfully deleted note');
      })
    }
}