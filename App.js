import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
// styles
import { Text, TouchableHighlight, View } from "react-native";
import { useReportsStore } from "./src/store/reports.store";
import Main from "./src/store/main";
import { styles } from "./app.styles";
import TomateLogo from "./src/components/images/logo";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar style="light" />
        <Main />
      </View>
    </SafeAreaProvider>
  );
}
