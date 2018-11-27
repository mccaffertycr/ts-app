import React, { Component } from 'react';
import axios from 'axios';
import Note from './Note';

const initialState = {
  notes: [],
  selectedNote: {}
}

type State = Readonly<typeof initialState>;

interface Note {
  _id: string,
  title: string,
  body: string,
  createdAt: Date
}

class NoteContainer extends Component<object, State> {
  readonly state: State = initialState;

  public getNotes = () => {
    axios.get('/notes').then(response => {
      if (response) {
        console.log(response);
        if (response.data) {
          this.setState({ notes: response.data })
        }
      }
    })
  }

  public selectNote = (id: string) => {
    axios.get('/id').then(response => {
      if (response) {
        console.log(response);
      }
    })
  }

  public render() {
    return(
      <div>
        {this.state.notes ? 
          this.state.notes.map((note: Note) => {
            <Note key={note._id} 
                  _id={note._id}
                  title={note.title} 
                  body={note.body} 
                  createdAt={note.createdAt}
                  selectNote={this.selectNote}
            />
          }) :
          ''
        }
      </div>
    )
  }
}

export default NoteContainer;