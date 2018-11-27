import React, { Component, MouseEvent } from 'react';
import { string } from 'prop-types';

const initialState = {
  title: '',
  body: '',
  createdAt: new Date('')
}

type State = Readonly<typeof initialState>;

export default class Create extends Component<object, State> {
  readonly state: State = initialState;

  public handleChange = () => {
    
  }

  public handleSubmit = () => {

  }

  public render() {
    return(
      <div style={{ marginTop: 10 }}>
        <p>add a new entry</p>
        <form>
          <div className="form-group">
            <label>add title</label>
            <input 
              type="text" 
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>add body</label>
            <input 
              type="text" 
              name="body"
              value={this.state.body}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="post" onClick={this.handleSubmit}/>
          </div>
        </form>
      </div>
    )
  }

}
