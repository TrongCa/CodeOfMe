import React, { Component } from 'react';
import Noteitem from './NoteItem';
import {noteData} from './firebaseConnect';
import {onValue} from 'firebase/database';

class NoteList extends Component {
    constructor(props, context) {
        super(props, context);
        this.state={
            dataFirebase:[]
        }
    }
    
    componentWillMount() {
        onValue(noteData, (snapshot) => {
            // const notes = snapshot.val();
            // console.log(notes);
            var arrayData=[];
            snapshot.forEach(function (childSnapshot) {                
                var key = childSnapshot.key;
                var noteTitle = childSnapshot.val().noteTitle;
                var noteContent = childSnapshot.val().noteContent;
                // console.log(key);
                // console.log(noteContent);
                arrayData.push({
                    id:key,
                    noteTitle:noteTitle,
                    noteContent:noteContent
                })
                
                // console.log(arrayData);
            })
            this.setState({
                dataFirebase:arrayData
            });
        })
        
    }
    
    getData=() =>{
        if(this.state.dataFirebase)
        {
            // console.log(this.state.dataFirebase);
           return this.state.dataFirebase.map((value, key) =>{
                return(
                    <Noteitem 
                        key={key}
                        i={key}
                        noteTitle={value.noteTitle}
                        noteContent={value.noteContent}
                    />
                )
            })
        }
    }
    render() {
        return (
            <div className="col">
                <div id="noteid" role="tablist" aria-multiselectable="true">
                    
                    {this.getData()}
                </div>
            </div>

        );
    }
}

export default NoteList;