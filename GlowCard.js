import React from "react";
import { View } from "react-native";
import { overlayItemStyle } from "./styles";
import { AnimatedRadialGradient } from "./RadialGradient";

const borderWidth = 1; // a percentage of card width & height (the width of the laser going round the card) NOTE: buggy, if you increase to 10 you will see the bottom is lopped off

export const GlowCard = (props) => {
  return (
    <View
      style={{
        flex: 1,
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: `hsla(260, 100%, 3%, 0.3)`,
      }}
    >
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
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {props.children}
      </View>
    </View>
  );
};
