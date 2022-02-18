import './App.css';
import { noteData } from './firebaseConnect';
import Form from './Form';
import Nav from './Nav';
import NoteList from './NoteList';
import React, { Component } from 'react';
import { push } from '@firebase/database';
// import { push} from "firebase/database";

class App extends Component {
  addData=(item) =>{
    console.log(item);
    push(noteData, item)
  }
  render(){
    // console.log(noteData);

  return (
    <div className="App">
     <Nav/>
     <div className = "container">
       <div className = "row">
         <NoteList/>
         <Form getData={(item) =>this.addData(item)}/>
       </div>
     </div>
    </div>
  );
}
}

export default App;
