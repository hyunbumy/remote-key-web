import React from 'react';
import Locks from '../Locks/Locks';

const redirect = (event) => {
  event.preventDefault();
  window.href = '/app/add';
};

const MainContainer = (props) => (
  // <div>
  //   // Add nav bars
  //   <Locks/>
  //   // Temp button for lock addition
  //   <button href='/app/add'>Add a Lock</button>
  // </div>
  <div>
    <Locks />
    <button onClick={redirect}>Add a Lock</button>
  </div>
);

export default MainContainer;
