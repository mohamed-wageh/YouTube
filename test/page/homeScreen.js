import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function HomeScreen( {navigation } ) {
  return (
    <View style = {styles.container}>
      <Text style = {styles.title}> HomeScreen</Text>
      <View style = {styles.buttonContainer}>
        <Button
        title='sign in'
        />
        <Button
        title='sign up'
        onPress={() => navigation.navigate('SignUp')}
        />
      </View>
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
  buttonContainer:{
    flexDirection : 'row',
    justifyContent: 'space-between',
    width:'80%',
    marginTop:20,
  },
  title:{
    fontSize : 24,
    fontWeight : 'bold',
  }
});
