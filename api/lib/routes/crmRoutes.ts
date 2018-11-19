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

    app.route('/poems')
    .get(this.NoteController.getNotes)
    .post(this.NoteController.addNewNote)

    app.route('/poems/:id')
    .get(this.NoteController.noteWithID)
    .put(this.NoteController.updateNote)
    .delete(this.NoteController.deleteNote)
  }
}