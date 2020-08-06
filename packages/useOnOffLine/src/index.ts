import React, { useState, useEffect } from 'react';

function getOnlineStatus() {
  return typeof navigator !== 'undefined' &&
    typeof navigator.onLine === 'boolean'
    ? navigator.onLine
    : true;
}

const useOnlOffLine = () => {
  const [status, setStatus] = useState(getOnlineStatus());

  const goOnline = () => setStatus(true);

  const goOffline = () => setStatus(false);

  useEffect(() => {
    window.addEventListener('online', goOnline);
    window.addEventListener('offline', goOffline);

    return () => {
      window.removeEventListener('online', goOnline);
      window.removeEventListener('offline', goOffline);
    };
  }, []);

  return status;
};

export default useOnlOffLine;
