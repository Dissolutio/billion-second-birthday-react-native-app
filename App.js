import React, { Component } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";

// You can import from local files
import Starfield from "./Starfield";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const vw = windowWidth / 100;

export default class App extends Component {
  // const
  render() {
    return (
      <View style={styles.page}>
        <View style={styles.starfield}>
          <Starfield />
        </View>
        <View style={styles.cardWrapper}>
          <View style={styles.card}>
            <Text style={styles.text}>What?</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    position: "relative",
    // display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // height: "100vh",
    // width: "100vw",
    backgroundColor: "#000",
  },
  starfield: {
    position: "absolute",
    top: 0,
    left: 0,
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "transparent",
  },
  cardWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    backgroundColor: "transparent",
  },
  card: {
    backgroundColor: `hsl(260, 100% 3%)`,
    color: "rgb(255, 255, 255)",
    // backgroundColor: `white`,
    width: windowWidth / 1.4,
    aspectRatio: 1.5 / 1,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "sans-serif",
    borderRadius: 3.6 * vw,
  },
  text: {
    color: "rgb(255, 255, 255)",
  },
});

// import { StatusBar } from "expo-status-bar";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   ScrollView,
//   Button,
// } from "react-native";
// import DateTimePicker from "react-native-ui-datepicker";

// import dayjs from "dayjs";
// import { useState } from "react";

// export default function App() {
//   const initialTime = dayjs().subtract(18, "year");
//   const [value, setValue] = useState(initialTime);
//   const [isShowResult, setIsShowResult] = useState(false);
//   const resultDate = dayjs(value).add(1_000_000_000, "seconds");
//   const now = dayjs();
//   const isResultDatePast = now.diff(resultDate, "day") > 0;
//   const isResultDateFuture = now.diff(resultDate, "day") < 0;
//   const isResultDateToday = now.diff(resultDate, "day") === 0;
//   const doSomething = () => {
//     setIsShowResult(true);
//   };
//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         <Image
//           source={{
//             uri: "https://reactnative.dev/docs/assets/p_cat2.png",
//           }}
//           style={{ width: 200, height: 200 }}
//         />
//         <Text>Enter your birthday below:</Text>
//         <DateTimePicker
//           value={value}
//           onValueChange={(date) => setValue(date)}
//         />
//         <Button title={"Go!"} onPress={doSomething} />
//         <Text>{`Your day is: ${resultDate
//           .format("MMM-DD YYYY HH:mm:ss")
//           .toString()}`}</Text>

//         <StatusBar style="auto" />
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
