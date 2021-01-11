import React from 'react';
import { ToastAndroid, } from 'react-native';

export const registerPost = (nameVal, emailVal, passwordVal) => {
  const url = 'https://l.kaigen.us/?name='+nameVal+
    "&email="+emailVal+
    "&password="+passwordVal
  ToastAndroid.show(url, ToastAndroid.SHORT);

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  })
  .then((response) => response.text())
  .then((text) => {
    ToastAndroid.show(text, ToastAndroid.SHORT);
  })
  .catch((error) => {
      console.error(error);
  });
};
