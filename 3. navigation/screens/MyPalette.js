import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Linking } from "react-native";

export default function MyPalette() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.camel}/>
      <View style={styles.cosmicLatte}/>
      <View style={styles.GrayX11Gray}/>
      <View style={styles.barnRed}/>
      <View style={styles.bistre}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  camel:{
    backgroundColor:"#AF9164",
    flex:2,
    height: 50,
    padding: 50,
    margin: 30
  },
  cosmicLatte:{
    backgroundColor:"#F7F3E3",
    flex:2,
    height: 50,
    padding: 50,
    margin: 30
  },
  GrayX11Gray:{
    backgroundColor:"#B3B6B7",
    flex:2,
    height: 50,
    padding: 50,
    margin: 30
  },
  barnRed:{
    backgroundColor:"#6F1A07",
    flex:2,
    height: 50,
    padding: 50,
    margin: 30
  },
  bistre:{
    backgroundColor:"#2B2118",
    flex:2,
    height: 50,
    padding: 50,
    margin: 30
  }
});
