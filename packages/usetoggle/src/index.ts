import { useCallback, useState } from 'react';

function useToggle(initialState = false) {
  const [state, setState] = useState(initialState);
  const onToggle = useCallback(() => setState((s) => !s), []);

  return { state, onToggle };
}

export default useToggle;
