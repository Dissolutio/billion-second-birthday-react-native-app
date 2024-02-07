import React from "react";
import { StyleSheet, View } from "react-native";

export const GlowCard = () => {
  return <View style={styles.card}></View>;
};

const styles = StyleSheet.create({
  card: {
    height: "100px",
    width: "100px",
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
