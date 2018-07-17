import React from 'react';
import Lock from './Lock/Lock';

const locks = (props) => props.locks.map((lock, index) => {
  return (
    <Lock
      lockName={lock.lockName}
      ipAddr={lock.ipAddr}
      userName={lock.username}
      key={lock.id}
    />
  );
});

// const locks = () => <h1>Hello</h1>;

export default locks;
