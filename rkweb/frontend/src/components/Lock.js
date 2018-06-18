import React from 'react';

const lock = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-8">
          <div className="row">
            <div className="col">
              {props.lockName}
            </div>
            <div className="col">
              {props.ipAddr}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>{props.children}</p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <button className="btn btn-primary">Button</button>
        </div>
      </div>
    </div>
  );
};

export default lock;
