import React, { useRef, useEffect } from 'react';

export const useTimer = (callback: any, delay: number) => {
  const lastCB = callback;
  useEffect(() => {
    lastCB.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      lastCB.current();
    }

    if (delay != null) {
      const id = setTimeout(tick, delay);
      return () => {
        clearTimeout(id);
      };
    }
  }, [delay]);
};
