import { View, Text, StyleSheet } from "react-native";

export default function Subtitle({ children }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    color: "#cbae5eff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    padding: 6,
    marginVertical: 4,
    marginHorizontal: 12,
    borderBottomColor: "#cbae5eff",
    borderBottomWidth: 2,
  },
});
