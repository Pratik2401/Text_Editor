import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [inp, setInp] = useState("");
  const [out, setOut] = useState("");
  
  const UpperCase = () => {
    let uppercase = text.toUpperCase();
    setText(uppercase);
    props.showAlert("Converted to UpperCase","success")
  };
  const LowerCase = () => {
    let lowercase = text.toLowerCase();
    setText(lowercase);
    props.showAlert("Converted to LowerCase","success")
  };
  const ClearCase = () => {
    setText(" ");
    props.showAlert("All Text has been cleared","success")
  };
  const HandleChange = (event) => {
    setText(event.target.value);
  };

  const WhiteSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Deleted extra whitespaces","success")
  };

  const CopyCase = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard","success")
  };

  const replaceFunction=()=>{
    const replace=text.split(inp).join(out)
    if(replace===text)
    {
      
      props.showAlert("Not Found","danger")  
    }
    
    else{
      props.showAlert("Text Replaced","success")
    }
    setText(replace)
    
  }
  const getInp = (event) => { 
    setInp(event.target.value);
  };
  const getOut = (event) => { 
    setOut(event.target.value);
  };
  
  
  return (
    <>
    
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className={`form-label text-${props.text}`}>
              <h1>{props.heading}</h1>
            </label>
            <textarea
              className={`form-control text-${props.text} bg-${props.mode}`}
              id="exampleFormControlTextarea1"
              rows="8"
              onChange={HandleChange}
              value={text}
            ></textarea>
          </div>
          <button
            className="btn btn-primary mx-2 my-2"
            type="button"
            onClick={UpperCase}
          >
            Convert to Upppercase
          </button>
          <button
            className="btn btn-primary mx-2 my-2"
            type="button"
            onClick={LowerCase}
          >
            Convert to Lowercase
          </button>
          <button
            className="btn btn-primary mx-2 my-2"
            type="button"
            onClick={ClearCase}
          >
            Clear Text
          </button>
          <button
            className="btn btn-primary mx-2 my-2"
            type="button"
            onClick={CopyCase}
          >
            Copy Text
          </button>
          <button
            className="btn btn-primary mx-2 my-2"
            type="button"
            onClick={WhiteSpace}
            
          >
            Remove Extra Spaces
          </button>
          <div className={`container my-3 mx-2 text-${props.text} bg-${props.mode}`}>
            Replace<input className="mx-2 my-2" type="text" onChange={getInp} value={inp}/> with <input className="mx-2 my-2" type="text" onChange={getOut} value={out}/>
          <button
            className="btn btn-primary mx-2"
            type="button"
            onClick={replaceFunction}
          >
            Replace
          </button>
          </div>
        </form>
      </div>
      <div className={`container my-3 text-${props.text} bg-${props.mode}`}>
        <h1>Your text Summary</h1>
        <p>
          {(text.split(" ").filter(item => item !== "")).length} words and {" "}{text.replace(/\s/g,"").length} character
        </p>
        <p>
          The Above Text can be read in {(text.split(" ").filter(item => item !== "")).length*0.008}  minutes
        </p>
        <h2>Preview of Text</h2>
        <p>{text === "" ? "Enter Some Text First" : text}</p>

      </div>
    </>
  );
}
