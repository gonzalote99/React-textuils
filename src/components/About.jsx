import React from 'react';

export default function About(parms) {
  let myStyle = {
    color: parms.mode === 'dark' ? 'white' : 'black',
    backgroundColor: parms.mode === 'dark' ? 'rgb(3 39 67)' : 'white' 
    
  }

  return(
    <>
    <h1 style={{myStyle}}>about</h1>
      <div className='accordion' id='accordionPanelsStayOpenExample'>
      <div className='accordion-item' style={myStyle}>
      <h2 className='accordion-header' id='panelsStayOpen-headingOne'>
      <button style={myStyle} className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#panelsStayOpen-collapseOne' aria-expanded='true' aria-controls='panelsStayOpen-collapseOne'>
      <strong>analyze text</strong>
      </button>
      </h2>
        <div id='panelsStayOpen-collapseOne' className='accordion-collapse collapse' aria-labelledby='panelsStayOpen-headingOne'>
        <div className='accordion-body'>
        find most frequen word
        </div>
        </div>
      </div>
        <div className='accordion-item' style={myStyle}>
        <h2 className='accordion-header' id='panelsStayOpen-headingTwo'>
        <button style={myStyle} className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#panelsStayOpen-collapseTwo' aria-expanded='true' aria-controls='panelsStayOpen-collapseTwo'>
        <strong>free to use</strong>
        </button>
        </h2>
          <div id='panelsStayOpen-collapseTwo' className='accordion-collapse collapse' aria-labelledby='panelsStayOpen-headingTwo'>
          <div className='accordion-body'>
            app is free to use
          </div>
          </div>
        </div>
        <div className='accordion-item' style={myStyle}>
        <h2 className='accordion-header' id='panelsStayOpen-headingThree'>
        <button style={myStyle} className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#panelsStayOpen-collapseThree' aria-expanded='true' aria-controls='panelsStayOpen-collapseThree'>
        <strong>Browser Compatible</strong>
        </button>
        </h2>
          <div id='panelsStayOpen-collapseThree' className='accordion-collapse collapse' aria-labelledby='panelsStayOpen-headingThree'>
          <div className='accordion-body'>
            all browser like chrome, firefox, opera,
          </div>
          </div>
        </div>
        
      </div>
    </>
  )
}