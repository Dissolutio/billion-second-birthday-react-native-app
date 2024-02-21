import React from "react";
import { Animated, Easing } from "react-native";
import Svg, { Defs, RadialGradient, Stop, Ellipse } from "react-native-svg";

const HUE_SPEED = 1;
const ANIMATION_DURATION = 4000;

// This wrapper component holds and animates the values for hue and position
export const AnimatedRadialGradient = () => {
  const hueValue = React.useRef(new Animated.Value(0)).current;
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
      Animated.timing(hueValue, {
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
    <AnimatedRadialGradientBg
      hueValue={hueValue.interpolate(hueInterpolation)}
      gradientPosX={gradientPos.interpolate(gradientPosXInterpolation)}
      gradientPosY={gradientPos.interpolate(gradientPosYInterpolation)}
    />
  );
};

// this needs to be a class component for Animated.createAnimatedComponent to work
class RadialGradientBg extends React.Component {
  render() {
    const { hueValue, gradientPosX, gradientPosY } = this.props;
    const currentHue = hueValue ?? 1 * HUE_SPEED;
    const innerHsl = `hsl(${currentHue}, 100%, 90%)`;
    const secondHsl = `hsl(${currentHue}, 100%, 80%)`;
    const colorHsl = `hsl(${currentHue}, 100%, 60%)`;
    return (
      <Svg height="100%" width={"100%"}>
        <Defs>
          <RadialGradient
            id="grad"
            cx={`${gradientPosX ?? 0}%`}
            cy={`${gradientPosY ?? 0}%`}
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
            <Stop offset="0.4" stopColor={colorHsl ?? "#000"} stopOpacity="1" />
            <Stop offset="1" stopColor={"transparent"} stopOpacity="0" />
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
    );
  }
}
const AnimatedRadialGradientBg =
  Animated.createAnimatedComponent(RadialGradientBg);
