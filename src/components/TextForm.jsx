
import React , {useState} from 'react';

export default function TextForm(parms) {
  const [text, setText] = useState('');

  const toUpCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    parms.showAlert('converted to uppercase', 'success')
  }
  const toLoCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    parms.showAlert('converted to lowercase', 'success')
  }

  const toClear = () => {
    let newText = '';
    setText(newText);
    parms.showAlert('cleared text', 'success');
    
  }

  const toCapitalize = () => {
    let newText = text.split(' ');
    for(let i = 0; i < newText.length; i++) {
      if(newText[i].length === 1 || newText[i].length === 2) {
        continue;
      }
      newText[i] = newText[i].replace(newText[i].charAt(0), newText[i].charAt(0).toUpperCase());
    }

    let str = "";
    for(let j = 0;  j < newText.length; j++) {
      str += newText[j] + " ";
    }
    setText(str);
    parms.showAlert('convert to capitalize', 'success');
  }

  const toCopyText = () => {
    let newText = document.getElementById('box');
    newText.select();
    navigator.clipboard.writeText(newText.value);
    parms.showAlert('copied to clipboard', 'success');
  } 

  const toRemoveSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    parms.showAlert('extra spaces removed', 'success')
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  return(
    <>
    <div className='container' style={{color: parms.mode === 'dark' ? 'white' : 'black'}}>
       <h3>{parms.title}</h3>
      <div className='mb-3'>
      <textarea className='form-control' style={{backgroundColor: parms.mode === 'dark' ? '#133c5c' : 'white', color: parms.mode === 'dark' ? '#57fff1' : 'black' }} placeholder='enter you text' value={text} onChange={handleOnChange} id='box' rows="8"></textarea>
        <button id='upperBTN' disabled={text.length === 0} className='btn btn-primary my-2 mx-1' onClick={toUpCase}>to uppercase</button>
        <button disabled={text.length === 0} className='btn btn-primary my-2 mx-1' onClick={toLoCase}>to lowercase</button>
      <button disabled={text.length === 0} className='btn btn-primary my-2 mx-1' onClick={toClear}>to clear</button>
      <button disabled={text.length === 0} className='btn btn-primary my-2 mx-1' onClick={toCapitalize}>to capitalize</button>
    <button disabled={text.length === 0} className='btn btn-primary my-2 mx-1' onClick={toCopyText}>copy text</button>
      <button disabled={text.length === 0} className='btn btn-primary my-2 mx-1' onClick={toRemoveSpace}>remove extra space</button>
       </div>
    </div>
      <div className='container' style={{color: parms.mode === 'dark' ? 'white' : 'black'}}>
    <h3>text summary</h3>
        <p>{text.split(' ').filter((element) => {return element.length !== 0}).length}words and {text.length} character</p>
        <p>{0.008 * text.split(' ').filter((element) => {return element.length !== 0}).length} minutes to read</p>
        <hr />
        <h3>preview</h3>
        <p id='preview'>{text.length > 0 ? text : 'nothing to show'}</p>
      </div>
    </>
  )
  }

