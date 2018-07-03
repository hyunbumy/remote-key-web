import React from 'react';

const lock = (props) => {
  return (
    <div onClick={props.click} className="container-fluid lock-container border border-primary m-2 p-2" role="presentation">
      <div className="row justify-content-center">
        <div className="col-4">
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
        <div className="col-2">
          <button className="btn btn-primary">Button</button>
        </div>
      </div>
    </div>
  );
};

export default lock;
