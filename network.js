import React from 'react';

export const registerPost = (nameVal, emailVal, passwordVal) => {
  const url = "https://l.kaigen.us/api/register?"+
    "name="+nameVal+
    "&email="+emailVal+
    "&password="+passwordVal
  console.log(url);

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Function': 'register'
    },
  })
  .then((response) => response.text())
  .then((text) => {
    console.log(text);
  })
  .catch((error) => {
      console.error(error);
  });
};

export const signInPost = (nameVal, emailVal, passwordVal) => {
  const url = "https://l.kaigen.us/api/signIn?"+
    "&email="+emailVal+
    "&password="+passwordVal
  console.log(url);

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Function': 'signIn'
    },
  })
  .then((response) => response.text())
  .then((text) => {
    console.log(text);
  })
  .catch((error) => {
      console.error(error);
  });
};
