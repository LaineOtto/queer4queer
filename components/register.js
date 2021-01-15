import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { registerPost } from '../network.js';

const registerScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  return(
    <>
      <TextInput
        style={{borderWidth: 1, margin: 10, paddingVertical: 0}}
        placeholder="Name"
        onChangeText={name => {
          setName(name)
        }}
      />
      <TextInput
        style={{borderWidth: 1, margin: 10, paddingVertical: 0}}
        placeholder="Email"
        onChangeText={email => setEmail(email)}
      />
      <TextInput
        style={{borderWidth: 1, margin: 10, paddingVertical: 0}}
        placeholder="Password"
        onChangeText={password => setPassword(password)}
      />
      <Button
        title="Register"
        onPress={() => registerClick(name, email, password)}
      />
      <Button
        title="Have account?"
        onPress={() => navigation.navigate('Sign In')}
      />
    </>
  );
};

const registerClick = (name, email, password) => {
  registerPost(name, email, password);
}

export default registerScreen;
