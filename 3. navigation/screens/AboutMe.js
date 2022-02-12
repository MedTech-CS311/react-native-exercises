import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, Button, Linking} from 'react-native';

export default function AboutMe() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={{ 
          uri:
          'https://miro.medium.com/max/3150/1*0cwNajzEzzZ1iGRgau3Giw.jpeg',
        }} 
        style={styles.image}
        />
        <Text style={styles.text}>Khadija Djarraya</Text>
        <Text style={styles.text}>this is my first react native app</Text>
        <Button title="check my github" value='connect' onPress={ ()=>{ Linking.openURL('https://github.com/khadija-djarraya')}}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginTop:StatusBar.currentHeight,
    backgroundColor: '#123456' 
  },
  image:{ 
    height:200, 
    width:100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text:{
    //fontFamily:"Fantasy",
    color:"white"
  }
});