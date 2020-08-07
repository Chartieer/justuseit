import { useState } from 'react';

const setCookie = (name: string, value: any, options: object) => {
  const optionsWithDefaults = {
    days: 7,
    path: '/',
    ...options
  };
  const expires = new Date(
    Date.now() + optionsWithDefaults.days * 864e5
  ).toUTCString();
  document.cookie =
    name +
    '=' +
    encodeURIComponent(value) +
    '; expires=' +
    expires +
    '; path=' +
    optionsWithDefaults.path;
};

const getCookie = (name: string) => {
  return document.cookie.split('; ').reduce((r, v) => {
    const parts = v.split('=');
    return parts[0] === name ? decodeURIComponent(parts[1]) : r;
  }, '');
};

// useCookie Hook
export default function (key: string, initialValue: any) {
  const [value, setCookieValue] = useState(() => {
    return getCookie(key) || initialValue;
  });

  const updateCookie = (_value: any, options: object) => {
    setCookieValue(JSON.stringify(_value));
    setCookie(key, value, options);
  };

  const deleteCookie = (path = '/') => {
    updateCookie('', { days: -1, path });
    setCookieValue(null);
  };

  return [value, updateCookie, deleteCookie];
}
