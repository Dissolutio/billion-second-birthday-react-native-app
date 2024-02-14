import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import Starfield from "./Starfield";
import { overlayItemStyle } from "./styles";
import { GlowCard } from "./GlowCard";

const windowWidth = Dimensions.get("window").width;

export default class App extends Component {
  render() {
    return (
      <View style={styles.page}>
        <View style={overlayItemStyle}>
          <Starfield />
        </View>
        <View style={styles.cardWrapper}>
          <FullScreenCard>
            <GlowCard>
              <Text style={{ color: "#fff" }}>Yo!</Text>
            </GlowCard>
          </FullScreenCard>
        </View>
        <StatusBar style="auto" />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  page: {
    flex: 1,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: `hsl(260, 100%, 3%)`,
  },
  cardWrapper: {
    ...overlayItemStyle,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const FullScreenCard = (props) => {
  return (
    <View
      style={{
        width: windowWidth / 1.4,
        aspectRatio: 1.5 / 1,
      }}
    >
      {props.children}
    </View>
  );
};
