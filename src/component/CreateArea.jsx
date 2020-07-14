import React, { useState } from "react";

function CreateArea(props) {

    const [info, setInfo] = useState({ title:"", content:"" });

    function handleChange(event){
        const {name, value} = event.target;
        console.log(value, name);
        setInfo(preValue => {
            return{
            ...preValue,
            [name]: value};}
        );
        
    }
    function handeClick(event){
        props.onAdd(info);
        setInfo({title:"", content:"" });
        document.getElementById("reset").reset();
        event.preventDefault();

    }

  return (
    <div>
      <form id="reset">
        <input name="title" placeholder="Title" onChange={handleChange} value={info.title}/>
        <textarea name="content" placeholder="Take a note..." rows="3"  onChange={handleChange} value={info.content}/>
        <button onClick={handeClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
