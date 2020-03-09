/* functional component */

import React from 'react';

const Astronauts =({data, number}) => {

  // We must use data.map function becouse data is an array
        const astronautsList = data.map(astronaut => {
          return (
            <div className="cards"> 
              <div className="card">Astronaut name: {astronaut.name}</div>
              <div className="craft">Craft: {astronaut.craft}</div>
            </div>
          )
        }) 
      
        // querySelestor will put #wrap to the variable 
        // so we can use that variable to change css
        let showAstronauts = document.querySelector('#wrap');
       
        // This function will change visibility of tag with ID wrap
       const AstronautsView = ()=>{
         showAstronauts.style.display = "block";
       }
       

    return ( 
      <div>
        <div className="text">There is a {number} Astronauts in space at this moment</div> 
        <div className="text">Click to see the names:</div>
        <button className="btn" onClick= {AstronautsView}>Astronauts</button>
        <div id="wrap">{astronautsList}</div>
        </div>
    )
}

export default Astronauts;