import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import Locks from '../Locks';

const lock = (props) => {
  const openLock = (ipAddress) => {
    axios.post(`http://${ipAddress}:8000/locker/`, {
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container-fluid lock-container border border-primary m-2 p-2" role="presentation">
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
          <button onClick={() => openLock(props.ipAddr)} className="btn btn-primary">Button</button>
        </div>
      </div>
    </div>
  );
};

lock.propTypes = {
  lockName: PropTypes.string.isRequired,
  ipAddr: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default lock;
