import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { signInPost } from '../network.js';

const signInScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  return(
    <>
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
        title="Sign In"
        onPress={() => signInClick(email, password)}
      />
      <Button
        title="No account?"
        onPress={() => navigation.navigate('Register')}
      />
    </>
  );
};

const signInClick = async (email, password) => {
  const pwHash = await JSHash(password, CONSTANTS.HashAlgorithms.sha256)
  signInPost(email, pwHash);
}

export default signInScreen;
