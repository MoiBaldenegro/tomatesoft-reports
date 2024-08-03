import { View } from "react-native";
import { Slot } from "expo-router";
import { styles } from "../../app.styles";

export default function Layout() {
  return (
    <View style={styles.container}>
      <Slot />
    </View>
  );
}
