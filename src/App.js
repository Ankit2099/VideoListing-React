import React from 'react';

import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
      <h1 className={classes.MainHeading}>Video Grid!!</h1>
      <div className={classes.VideoGrid}>
        {/* Add Video Cards from Video Array available in Constants  */}
      </div>
    </div>
  );
}

export default App;