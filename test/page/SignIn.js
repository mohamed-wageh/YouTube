import { StatusBar } from 'expo-status-bar';
import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import testimg from '../assets/test.jpg';
export default function SignIn() {
  return (
    <View style={styles.container}>
      <ImageBackground source={testimg} style = {styles.backgroundimage}>
      <Text style = {styles.title} >Sign in</Text>
      </ImageBackground>
      <TextInput
      style = {styles.input}
      placeholder='Email'
      />
      <TextInput
      style = {styles.input}
      placeholder='Password'
      />
      <Button title='Sign in'/>
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
  },
  backgroundimage:{
    width:200,
    height:200,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:10,
  }
});
