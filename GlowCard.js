import React from "react";
import { View, Animated, Easing } from "react-native";
import { overlayItemStyle } from "./styles";
import { AnimatedRadialGradientSvg } from "./glow-card/AnimatedRadialGradientSvg";
import { AnimatedRotatingGlowBoxSvg } from "./glow-card/AnimatedRotatingGlowBoxSvg";

const borderWidth = 1; // a percentage of card width & height (the width of the laser going round the card) NOTE: buggy, if you increase to 10 you will see the bottom is lopped off
const ANIMATION_DURATION = 4000;
const hueInterpolation = {
  inputRange: [0, 1],
  outputRange: [0, 360],
};
const gradientPosXInterpolation = {
  inputRange: [0, 0.25, 0.5, 0.75, 1],
  outputRange: [0, 100, 100, 0, 0],
};
const gradientPosYInterpolation = {
  inputRange: [0, 0.25, 0.5, 0.75, 1],
  outputRange: [0, 0, 100, 100, 0],
};
const phaseChangeDegrees = -70;
const interpolateGlowRotation = {
  inputRange: [0, 1],
  /* 
   -70 degrees, this adjusts the glow to happen a little "behind"
   the outline laser, which looks better than in front; 
   The distance, from the corner where the laser starts to the 
   center where the glow starts, will vary from screen to screen obviously
   */
  outputRange: [phaseChangeDegrees, 360 + phaseChangeDegrees],
};
const phaseChange = Math.abs(phaseChangeDegrees) / 360;
const maxTranslateY = 150;
const interpolateGlowTranslateY = {
  inputRange: [
    0,
    phaseChange,
    0.25 + phaseChange,
    0.5 + phaseChange,
    0.75 + phaseChange,
    1,
  ],
  outputRange: [phaseChange * 150, 0, 150, 0, 150, phaseChange * 150],
};

export const GlowCard = (props) => {
  // const hueValue = React.useRef(new Animated.Value(0)).current;
  const animationProgress = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.timing(animationProgress, {
        toValue: 1,
        useNativeDriver: false,
        duration: ANIMATION_DURATION,
        easing: Easing.linear,
      })
    ).start();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        position: "relative",
      }}
    >
      <View style={overlayItemStyle}>
        <AnimatedRadialGradientSvg
          hueValue={animationProgress.interpolate(hueInterpolation)}
          gradientPosX={animationProgress.interpolate(
            gradientPosXInterpolation
          )}
          gradientPosY={animationProgress.interpolate(
            gradientPosYInterpolation
          )}
        />
      </View>
      <View style={overlayItemStyle}>
        <AnimatedRotatingGlowBoxSvg
          hueValue={animationProgress.interpolate(hueInterpolation)}
          rotationValue={animationProgress.interpolate(interpolateGlowRotation)}
          translateYValue={animationProgress.interpolate(
            interpolateGlowTranslateY
          )}
        />
      </View>
      <InnerSlightlySmallerView>{props.children}</InnerSlightlySmallerView>
    </View>
  );
};

const InnerSlightlySmallerView = ({ children }) => {
  return (
    <View
      style={{
        ...overlayItemStyle,
        backgroundColor: `hsla(260, 100%, 3%, 0.93)`,
        width: `${100 - borderWidth}%`,
        height: `${100 - borderWidth}%`,
        marginLeft: `${borderWidth / 2}%`,
        marginTop: `${borderWidth / 2}%`,
        flex: 1,
      }}
    >
      {children}
    </View>
  );
};
