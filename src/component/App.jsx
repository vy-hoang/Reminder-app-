import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";



function App(){

    const [newNote, setNote] = useState([]);

    function handleAdd(note){
        setNote(preNote =>{
            return[
                ...preNote, note

        ];
        });
    }

    function Delete(id){
        
            setNote(preIndex => {
                return preIndex.filter((note, index) =>{
                return index !== id ;
            })
           
        });
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={handleAdd}/>
            {newNote.map((noteItems, index) =>{
                return(
                    <Note 
                        key={index}
                        id={index}
                        title={noteItems.title}
                        content={noteItems.content}
                        onDelete={Delete}
                    />
                );
            })}
            
            <Footer />
        </div>);
}

export default App;