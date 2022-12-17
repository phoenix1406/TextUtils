import React,{useState} from 'react'
import PropTypes from 'prop-types'


export default function Textform(props) {
  
  const [text,setText] = useState('');
  
  function download(file, text) {
             
    //creating an invisible element
    var element = document.createElement('a');
    element.setAttribute('href',
    'data:text/plain;charset=utf-8, '
    + encodeURIComponent(text));
    element.setAttribute('download', file);
 
    // Above code is equivalent to
    // <a href="path of file" download="file name">
 
    document.body.appendChild(element);
    
 
    //onClick property
    element.click();
 
    document.body.removeChild(element);
}
  
  const handleUpClick = (event)=>{
    let newtext = text.toUpperCase();
    setText(newtext);
    event.preventDefault();
    props.showAlert('converted to uppercase','success')
    
  }
  const handleDoClick = (event)=>{
    let newtext = text.toLowerCase();
    setText(newtext);
    event.preventDefault();
    props.showAlert('converted to downcase','success')
  }
  const removeText = (event)=>{
   
    setText('');
    event.preventDefault();
    props.showAlert('Text removed','success')
    
  }
  const handleOnChange = (event)=>{
    setText(event.currentTarget.value);
   
  }
  let  counter =0;
  const handleDownload =(event)=>{
       event.preventDefault();
    
    counter=  counter+1;
     let filename = `yourtext${counter}.txt`
    download(filename,text);
    props.showAlert('File Downloaded Successfully','success')
  }
  const handleCopy = (e)=>{
    e.preventDefault();
    let textbox = document.getElementById('mybox');
    textbox.select();
    navigator.clipboard.writeText(textbox.value);
    props.showAlert('Copied Text To ClipBoard','success');
  }
  
  return (
    <>
   
      <h1 className='my-3' style={{color:props.mode==='dark'?'darkBlue':'black'}}>{props.heading}</h1>
    <div className="mb-3">
   <textarea className="form-control" id="mybox" rows="8" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'#042743',caretColor:props.mode==='dark'?'white':'black'}}></textarea>
    </div>
    <button className="btn btn-primary" onClick = {handleUpClick}>ConvertToUpperCase</button>
    <button className="btn btn-warning"  onClick ={removeText}>RemoveText</button>
    <button className="btn btn-danger" onClick = {handleDoClick}>ConvertToLowerCase</button>
    <button className="btn btn-success" onClick ={handleDownload}>DownloadText</button>
    <button className="btn btn-secondary" onClick = {handleCopy}>CopyText</button>


 <div className="container my-3" style = {{color:props.mode==='dark'?'white':'#042743',backgroundColor:props.mode==='dark'?'#042743':'white'}}>
  <h1>Your Text Summary</h1>
  <p>{text.split(" ").length-1} words and {text.length} characters</p>
  <p>{text.length>0?0.008*text.split(" ").length: 0 } minutes to read</p>
  <h2>preview</h2>
   <p>{text.length>0?text:"Enter Something in the TextBox to preview it"}</p>

 </div>
 </>
  )
}
Textform.propTypes = {
  heading : PropTypes.string.isRequired,

}