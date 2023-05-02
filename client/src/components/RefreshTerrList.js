import React from 'react';

const RefreshTerrs = () => {

    const handleClick = () => {
        console.log("button is working")
    }
    
    return (
        <div className="refresh">
           <button onClick={handleClick}>Refresh Terr List</button>
        </div>
    );
}

//export default RefreshTerrs