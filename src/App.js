import React from 'react';
import InteractiveCircle from './components/InteractiveCircle';
function App() {
  const clasediv={
        display: "flex",
        justifyContent: "center",      
  }
  return (
    <div style={clasediv}>
    <InteractiveCircle/>
    </div>
  );
}

export default App;
