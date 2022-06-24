import React, { useState } from 'react'


function TextForm(props) {

    //#####################################
    const [text, setText] = useState('');
    //####################################

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted To uppercase","success");
    }
    //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    const handleOnChange = (event) => {
        setText(event.target.value);
        // console.log("Input value detected")
        // props.showAlert("Converted To uppercase")
    }
    //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To lowercase","success");
    }
    //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    const handleClearClick = () =>{
        setText("");
        props.showAlert("leared all the text.","danger");
    }
    //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    const handleCopyText = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard","info");
    }
    //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    const removeSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Redundant spaces removed.","success");
    }

    // console.log(props.mode)
    // console.log(props.heading)


    return (
    
        <>
        <div className="container" style={{ color: props.mode === 'dark'?'white':'black' }}>
            <h2 className="mx-2 px-2">{props.heading}</h2>
            <div className="mb-3" >
                    <textarea className="form-control" value={text} onChange={ handleOnChange }  style={{backgroundColor: props.mode === 'dark'?'grey':'white',color: props.mode === 'dark'?'white':'black'}} id="myBox" rows="6"></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowecase</button>
            <button className="btn btn-success mx-1 my-1" onClick={removeSpaces}>Remove Spaces</button>
            <button className="btn btn-info mx-1 my-1" onClick={handleCopyText}>Copy Text</button>
            <button className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>Clear Text</button>

        </div>
        <div className="container my-4" style={{ color: props.mode === 'dark'?'white':'black' }} >
            <h2>Your Text summary is Here : </h2>
            <p>{ text.split(" ").filter((element)=>{ return element.length!==0}).length } words and {text.length} sharacters</p>
            <p>{ text.split(" ").length * 0.008 } Minutes required.</p>
            <h4>Preview</h4>
            <p> { text.length>0? text: "Enter something in the text-box above to preview :" } </p>

        </div>
        </>
    
  )
}

export default TextForm