import React, {Fragment} from 'react';
import './App.css';

//components

// import ListAdrs from "./components/GetAddresses";
import Form from "./components/PickTerritory";


function App() {
  return (
    <Fragment>
      <div className='container'>
        <Form />
      </div>
    </Fragment>
    
  )
  
}

export default App;
