import { View } from "react-native";
import React from "react";
import { Animated } from "react-native";
import Svg, { Defs, RadialGradient, Stop, Ellipse } from "react-native-svg";

// this needs to be a class component for Animated.createAnimatedComponent to work
class RotatingGlowBoxSvg extends React.Component {
  render() {
    const { hueValue, rotationValue, translateYValue } = this.props;
    const innerHsl = `hsl(${hueValue}, 100%, 90%)`;
    const secondHsl = `hsl(${hueValue}, 100%, 80%)`;
    const colorHsl = `hsl(${hueValue}, 100%, 60%)`;
    return (
      <View
        style={[
          {
            height: "100%",
            width: "100%",
            borderRadius: 5,
          },
          {
            transform: [{ rotateZ: `${rotationValue}deg` }],
          },
        ]}
      >
        <View
          style={[
            {
              height: 100,
              width: 100,
              borderRadius: 5,
            },
            {
              transform: [
                { translateY: translateYValue },
                { rotateZ: `${rotationValue}deg` },
                { scale: 6 },
              ],
            },
          ]}
        >
          <Svg height="100%" width={"100%"}>
            <Defs>
              <RadialGradient
                id="grad"
                cx={`${50}%`}
                cy={`${50}%`}
                rx={"30%"}
                ry={"30%"}
                gradientUnits="userSpaceOnUse"
              >
                <Stop
                  offset="0"
                  stopColor={innerHsl ?? "#fff"}
                  stopOpacity="1"
                />
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
        </View>
      </View>
    );
  }
}

export const AnimatedRotatingGlowBoxSvg =
  Animated.createAnimatedComponent(RotatingGlowBoxSvg);
