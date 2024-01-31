import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

// You can import from local files
import Starfield from "./Starfield";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Starfield />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
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
