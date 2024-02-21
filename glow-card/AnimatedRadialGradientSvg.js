import React from "react";
import { Animated, Easing } from "react-native";
import Svg, { Defs, RadialGradient, Stop, Ellipse } from "react-native-svg";

// this needs to be a class component for Animated.createAnimatedComponent to work
class RadialGradientSvg extends React.Component {
  render() {
    const { hueValue, gradientPosX, gradientPosY } = this.props;
    const currentHue = hueValue;
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
export const AnimatedRadialGradientSvg =
  Animated.createAnimatedComponent(RadialGradientSvg);
