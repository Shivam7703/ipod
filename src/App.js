import React from 'react';
import Buttons from './Button';

function App() {
  return (
    <div className="body">

    <div style={{width:"320px", height:500, color:"white", marginRight:"200px"}}><h1>HOW TO USE:</h1>
    <h3>For changing the selection in menu bar please click and drag in clock wise or anti clockwise.
      <br/>
      ........press on mouse icon to select the options in menu bar.<br/>
       .......first drag one more time abov right button's icon then press left or right button to change songs or wallpaper.<br/>
       .....first drag one more time in the bottom of right button's icon then press MENU button if menu bar is invisible.</h3></div>
  
    <Buttons/>
   
    </div>
  );
}

export default App;
