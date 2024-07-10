import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

export default function App() {
  const [reports, setReports] = useState([]);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button
        title="Click me"
        onPress={() => alert("Button Clicked")}
        color={"red"}
      />
      <TouchableHighlight>
        <Text>Touchable Highlight</Text>
      </TouchableHighlight>
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
