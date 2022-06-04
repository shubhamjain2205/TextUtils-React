import React, {useState} from 'react';


export default function TextForm(props) {
    const HandleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Coverted to UpperCase", "success")
    }

    const HandleLoClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Coverted to LowerCase", "success")
    }

    const HandleClearClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = ('');
        setText(newText)
        props.showAlert("Text cleared", "success")
    }

    const handleOnChange = (event)=>{
        // console.log("OnChange");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
  return (
      <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}} >
        <h1 >{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={HandleUpClick}>Convert to UPPERCASE</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={HandleLoClick}>Convert to lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={HandleClearClick}>Clear text</button>


    </div>
    <div className="container my-3"  style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length != 0}).length} words , {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length != 0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview."}</p>
    </div>
    </>
  );
}
