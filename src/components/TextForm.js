import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick =()=>{
    //console.log("uppercase was clicked"+text);
    let newtext=text.toUpperCase();
    setText(newtext)

  }
  const handleloClick =()=>{
    //console.log("uppercase was clicked"+text);
    let newtext=text.toLowerCase();
    setText(newtext)}

    const handleclearClick =()=>{
      //console.log("uppercase was clicked"+text);
      let newtext=("")
      setText(newtext)}

      const handlesentClick =()=>{
        //console.log("uppercase was clicked"+text);
        let newtext=text.charAt(0).toUpperCase()+text.slice().substring(1);
        setText(newtext)}
      
        const handlecopy =()=>{
          var text=document.getElementById("mybox")
          text.select()
          navigator.clipboard.writeText(text.value);
        }
    
  

  const handleonChange =(event)=>{
   setText(event.target.value);
   // console.log("onchange");
  }
const[text,setText]= useState("");
  return (
    <>
<div>
  <h1><u>{props.heading}</u></h1>
    <div className="my-3">
    <label htmlFor="mybox" class="form-label"></label>
    <textarea className="form-control"value={text} id="mybox" rows="8"onChange={handleonChange}style={{color:"black"}}></textarea>
    <button className="btn btn-primary mx-1"onClick={handleUpClick}style={{color:"black"}}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleloClick}style={{color:"black"}}>Convert to lowercase</button>
    <button className="btn btn-primary mx-1" onClick={handleclearClick}style={{color:"black"}}>Clear the text</button>
    <button className="btn btn-primary mx-1" onClick={handlesentClick}style={{color:"black"}}>Sentance text</button>
    <button className="btn btn-primary mx-1" onClick={handlecopy}style={{color:"black"}}>Copy text</button>
</div>
    </div>
  <div className='container'my-5>
    <h3><u>Your Text Summary</u></h3>
    <p>word = {text.split(" ").length}  and characters = {text.length}</p>
    <p>{0.008*text.split(" ").length}Minutes read </p>
    <h3><u>Preview</u></h3>
    {text}
  </div>
    </>
  )
}
