import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        Bring your colors from{" "}
        <Text
          style={{ color: "blue" }}
          onPress={() => Linking.openURL("https://coolors.co/")}
        >
          coolors
        </Text>{" "}
        here
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
