import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import testimg from '../assets/test.jpg';
export default function SignUp() {
  return (
    <View style={styles.container}>
      <Text style = {styles.title} >Sign Up</Text>
      <TextInput
      style = {styles.input}
      placeholder='Email'
      />
      <TextInput
      style = {styles.input}
      placeholder='Password'
      />
      <Button title='Sign Up'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    width: '100%',
    height : 50,
    marginBottom:10,
    borderWidth:1,
  },
  title:{
    fontSize :24,
    fontWeight:'bold',
    marginBottom:10,
  }
});
