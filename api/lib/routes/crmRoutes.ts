import { Request, Response } from 'express';
import { NoteController } from '../controllers/crmController';

export class Routes {
  public NoteController: NoteController = new
  NoteController();

  public routes(app): void {
    app.route('/')
    .get((req: Request, res: Response) => {
      res.status(200).send({
        message: 'successful GET request!'
      })
    })

    app.route('/notes')
    .get((req: Request, res: Response, next: Function) => {
      if(req.query.key !== '60caa902f084ef81ff4c15cc90e044b113a66a65e'){
        res.status(401).send('You shall not pass!');
       } else {
        next();
       } 
      }, this.NoteController.getNotes)
    .post(this.NoteController.addNewNote)

    app.route('/notes/:id')
    .get(this.NoteController.noteWithID)
    .put(this.NoteController.updateNote)
    .delete(this.NoteController.deleteNote)
  }
}