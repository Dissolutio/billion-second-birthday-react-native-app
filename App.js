import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, Dimensions } from "react-native";
import Starfield from "./Starfield";
import { overlayItemStyle } from "./styles";
import { GlowCard } from "./GlowCard";
import { BirthdayForm } from "./BirthdayForm";

export default App = () => {
  return (
    <View style={styles.page}>
      <View style={overlayItemStyle}>
        <Starfield />
      </View>
      <View style={styles.cardWrapper}>
        <FullScreenCard>
          <GlowCard>
            <BirthdayForm />
          </GlowCard>
        </FullScreenCard>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};
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
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <View
      style={{
        width: windowWidth / 1.4,
        height: windowHeight / 1.4,
      }}
    >
      {props.children}
    </View>
  );
};
