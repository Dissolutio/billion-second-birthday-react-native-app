import React from "react";
import { View, Dimensions, Animated, Easing } from "react-native";
import Svg, { Defs, RadialGradient, Stop, Ellipse } from "react-native-svg";

const HUE_SPEED = 1;
const GLOW_SCALE = 1.5;
const GLOW_RADIUS = 100;
const ANIMATION_DURATION = 4000;
const glowInitialAngleAdjustment = 70; // this is to put the glow slightly behind the laser for a cooler effect

class RadialGradientBg extends React.Component {
  render() {
    const { hueValue, gradientPosX, gradientPosY } = this.props;
    const currentHue = hueValue * HUE_SPEED;
    const windowWidth = Dimensions.get("window").width;
    const windowHeight = Dimensions.get("window").height;
    const vw = windowWidth / 100;
    const cardWidth = 75 * vw;
    const innerHsl = `hsl(${currentHue}, 100%, 90%)`;
    const secondHsl = `hsl(${currentHue}, 100%, 80%)`;
    const colorHsl = `hsl(${currentHue}, 100%, 60%)`;
    return (
      <View
        style={{
          width: cardWidth,
          aspectRatio: 1.5 / 1,
        }}
      >
        <Svg height="100%" width={"100%"}>
          <Defs>
            <RadialGradient
              id="grad"
              cx={`${gradientPosX}%`}
              cy={`${gradientPosY}%`}
              rx={"30%"}
              ry={"30%"}
              gradientUnits="userSpaceOnUse"
            >
              <Stop offset="0" stopColor={innerHsl ?? "#fff"} stopOpacity="1" />
              <Stop
                offset="0.2"
                stopColor={secondHsl ?? "#fff"}
                stopOpacity="1"
              />
              <Stop
                offset="0.4"
                stopColor={colorHsl ?? "#000"}
                stopOpacity="1"
              />
              <Stop offset="1" stopColor={"transparent"} stopOpacity="1" />
            </RadialGradient>
          </Defs>
          <Ellipse
            cx={"50%"}
            cy={"50%"}
            rx={"100%"}
            ry={"100%"}
            fill="url(#grad)"
          />
        </Svg>
      </View>
    );
  }
}
const RadialGradientBackground =
  Animated.createAnimatedComponent(RadialGradientBg);

// This wrapper component holds and animates the values for hue and position
export const AnimatedRadialGradient = () => {
  const outerColor = React.useRef(new Animated.Value(0)).current;
  const gradientPos = React.useRef(new Animated.Value(0)).current;
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

  React.useEffect(() => {
    // animate outer color
    Animated.loop(
      Animated.timing(outerColor, {
        toValue: 1,
        useNativeDriver: false,
        duration: (ANIMATION_DURATION * 2) / Math.PI, // to give us a non-repetitive strobe
        // easing: Easing.inOut(Easing.exp),
        easing: Easing.linear,
      })
    ).start();
    // animate gradient position
    Animated.loop(
      Animated.timing(gradientPos, {
        toValue: 1,
        useNativeDriver: false,
        duration: ANIMATION_DURATION,
        easing: Easing.linear,
      })
    ).start();
  }, []);

  return (
    <>
      <RadialGradientBackground
        hueValue={outerColor.interpolate(hueInterpolation)}
        gradientPosX={gradientPos.interpolate(gradientPosXInterpolation)}
        gradientPosY={gradientPos.interpolate(gradientPosYInterpolation)}
      />
    </>
  );
};
