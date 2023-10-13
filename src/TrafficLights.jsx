import React, { useEffect, useState, useRef } from 'react';

import Signal from './Signal';

const signalsData = [
  {
    color: 'red',
    duration: 3000,
    isActive: true
  },
  {
    color: 'yellow',
    duration: 3000,
    isActive: false
  },
  {
    color: 'green',
    duration: 3000,
    isActive: false
  }
]

function TrafficLights() {
  const [signals, setSignals] = useState(signalsData);
  let currentSignalIndex = useRef(0);
  let timerId = useRef(null);

  useEffect(() => {
    startTheSignal(signals[currentSignalIndex.current].duration);

    return () => {
      clearTimeout(timerId.current);
    }
  }, [currentSignalIndex.current]);

  const startTheSignal = (duration) => {
    clearTimeout(timerId.current);
    timerId.current = setTimeout(() => {
      currentSignalIndex.current += 1;
      const newSignals = signals.map((signal, i) => {
        if(i === currentSignalIndex.current){
          return {
            ...signal,
            isActive: true
          }
        }
        return { ...signal, isActive: false }
      });
      setSignals(newSignals);
      if(currentSignalIndex.current === signals.length-1){
        currentSignalIndex.current = 0;
      }
    }, duration);
  }

  return (
    <div className="traffic-lights-wrapper">
      {
        signals.map((signal, i) => <Signal key={i} {...signal} />)
      }
    </div>
  );
}

export default TrafficLights;
