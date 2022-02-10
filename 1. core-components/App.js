import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Linking, Image,SafeAreaView, Button} from 'react-native';


export default function App() {
  
  return (
      <SafeAreaView style={styles.container}>
      <Image
          style={styles.image}
          source={require('./assets/profile.jpg')}
        />
        <Text style={{fontSize: 30, marginBottom: 30}}>Zidane Hammouda</Text>
        <Text style={{marginBottom: 60}}>Life is good</Text>
        <Button
        onPress={()=>{ Linking.openURL('https://github.com/zidanehammouda')}}
        title="Connect"
        color="#841584"
        accessibilityLabel="Navigate to github profile"

        />
      </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#302366',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
    borderWidth: 4,
    margin: 20,

  },
});