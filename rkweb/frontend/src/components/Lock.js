import React from 'react';

const Lock = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          {props.lockName}
        </div>
        <div className="col">
          {props.ipAddr}
        </div>
        <div className="col">
          <button className="btn btn-primary">Button</button>
        </div>
      </div>
    </div>
  );
};

export default Lock;
