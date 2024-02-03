import React , {useState} from 'react'

export default function TextForm(prop) {

    const [text, setText] = useState('Enter Your Text');

    function handleOnUpClicked(){
      let newText = text.toUpperCase();
      setText(newText);
      prop.showAlert(" UperCase Done !!", 'success')
    }

    function handleOnLoClicked(){
      let newText = text.toLowerCase();
      setText(newText);
      prop.showAlert(" LoweCase Done !!", 'success')
    }


    function handleOnClear(){
      let newText = '';
      setText(newText);
      prop.showAlert("Cleared text", 'success');
    }

  //Function to reverse text:
  function handleReverse(){
    /* Convert string to array*/
      let strArray = text.split('');
    /* Reverse array*/
      strArray = strArray.reverse();
    /* Convert array to string*/
      let newText = strArray.join('');
      setText(newText);
      prop.showAlert(" Reverse Done !!", 'success')
    }

    
    function handleOnChanged(event){
      console.log("text");
      setText(event.target.value);
      
    }

  return (
    <div>
    <div className='container'  style={{color: prop.mode === 'light'? 'black': 'white' }}> 
          <h1 >{prop.heading}</h1>
          <div className="mb-3">
          <textarea className="form-control" style={{backgroundColor: prop.mode ==='light'?'white':'grey', color: prop.mode==='light'?'black':'white'}} value={text} onChange={handleOnChanged} id="myBox" rows="8"></textarea>
          <button className='btn btn-primary my-3' onClick={handleOnUpClicked} >Convert to Uppercase</button>
          <button className='btn btn-primary my-3 mx-2' onClick={handleOnLoClicked} >Convert to Lowercase</button>
          <button className='btn btn-primary my-3 ' onClick={handleOnClear} >Clear Text</button>
          <button className='btn btn-primary my-3 mx-2 ' onClick={handleReverse} >Reverse Text</button>
          </div>
    </div>

    <div className="container " style={{color: prop.mode === 'light'? 'black': 'white' }}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} charecters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Enter the text to preview"}</p>
    </div>
    </div>
  )
}
