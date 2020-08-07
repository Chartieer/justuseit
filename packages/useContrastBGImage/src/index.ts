import { useCallback, useEffect, useRef } from 'react';

import Contrast from './contrast';

const useContrast = (cb: () => void) => {
  const ref = useRef(null);

  useEffect(() => {
    const contrast = new Contrast();

    contrast.launch();

    return () => {
      // on Remove
    };
  }, []);
  return ref;
};

export default useContrast;
