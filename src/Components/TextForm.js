import React,{useState} from 'react'


export default function TextForm(props) 
{
    const handleUpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowerClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }

    const handleRevClick=()=>{
        let newText=text.split('').reverse().join('');
        setText(newText);
    }

    const handleClearClick=()=>{
        let newText="";
        setText(newText);
    }

    // Important agar add nahi karege toh error aayega
    const handleOnChange=(event)=>{
        console.log("On Change");
        setText(event.target.value);
    }

    const [text , setText]=useState('');
  return (
    <>
    <div>
      <h1>{props.heading}</h1>  
      <div className="mb-3"  > 
       <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
    <button className="btn btn-primary mx-1" onClick={handleLowerClick}>Convert to lowerCase</button>
    <button className="btn btn-primary mx-1" onClick={handleRevClick}>Reverse String</button>
    <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container mx-1">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length}  words and {text.length} Character</p>
        <p>{0.008 * text.split(" ").length} Average Minutes required to read the text</p>
        
    </div>
    </>
  )
}
