import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { JSHash, CONSTANTS } from "react-native-hash";

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

const registerClick = async (name, email, password) => {
  const pwHash = await JSHash(password, CONSTANTS.HashAlgorithms.sha256)
  registerPost(name, email, pwHash);
}

export default registerScreen;
