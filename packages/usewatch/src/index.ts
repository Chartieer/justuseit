import { useEffect, useState, useRef } from 'react';

const UseWatch = (settings) => {
  const { format } = settings || {};

  const [seconds, setSeconds] = useState(Date.now());
  const intervalRef = useRef();

  function clearIntervalRef() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = undefined;
    }
  }

  function start() {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => setSeconds(Date.now()), 1000);
    }
  }

  // didMount effect
  useEffect(() => {
    start();
    return clearIntervalRef;
  }, []);

  return {
    ...Time.getFormattedTimeFromSeconds(seconds, format)
  };
};

export default UseWatch;
