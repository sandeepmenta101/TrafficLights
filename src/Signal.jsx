import React, { memo } from 'react';

function Signal({ color, isActive }) {
  return <div className={'signal'} style={{backgroundColor: isActive ? color : '#333'}}></div>;
}

export default memo(Signal);
