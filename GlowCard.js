import React from "react";
import { StyleSheet, View } from "react-native";
import { overlayItemStyle } from "./styles";
import { AnimatedRadialGradient } from "./RadialGradient";

export const GlowCard = () => {
  const borderWidth = 1; // a percentage of card width & height (the width of the laser going round the card)
  return (
    <View style={styles.card}>
      <View style={overlayItemStyle}>
        <AnimatedRadialGradient />
      </View>
      <View
        style={{
          ...overlayItemStyle,
          backgroundColor: `hsla(260, 100%, 3%, 0.99)`,
          width: `${100 - borderWidth}%`,
          height: `${100 - borderWidth}%`,
          marginLeft: `${borderWidth / 2}%`,
          marginTop: `${borderWidth / 2}%`,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: `hsla(260, 100%, 3%, 0.3)`,
  },
});
