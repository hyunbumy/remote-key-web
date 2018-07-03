import React from 'react';
import Lock from './Lock/Lock';

const locks = (props) => props.locks.map((lock, index) => {
  return (
    <Lock
      lockName={lock.lockName}
      ipAddr={lock.ipAddr}
      userName={lock.username}
      click={() => props.clicked(index)}
      key={lock.id}
    />
  );
});

export default locks;
