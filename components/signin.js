import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const signInScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  return(
    <>
      <TextInput
        style={{borderWidth: 1, margin: 10, paddingVertical: 0}}
        placeholder="Name"
        onChangeText={name => setName(name)}
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
        title="Sign In"
      />
      <Button
        title="No account?"
        onPress={() => navigation.navigate('Register')}
      />
    </>
  );
};

export default signInScreen;
