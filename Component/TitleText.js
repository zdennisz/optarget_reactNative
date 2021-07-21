import { Text, View, StyleSheet } from "react-native";
import React from "react";

const TitleText = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{props.text}</Text>
      <Text style={styles.footer}>(px)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 21,
    fontWeight: "bold",
  },
  footer: {
    fontSize: 16,
  },
});

export default TitleText;
