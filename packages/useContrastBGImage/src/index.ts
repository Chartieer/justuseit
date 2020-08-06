import { useCallback, useEffect, useRef } from 'react';

import Contrast from './contrast';

const useContrast = (cb: () => void) => {
  const ref = useRef(null);

  useEffect(() => {
    let contrast = new Contrast();

    contrast.launch();

    console.log(contrast);

    return () => {
      // on Remove
    };
  }, []);
  return ref;
};

export default useContrast;
