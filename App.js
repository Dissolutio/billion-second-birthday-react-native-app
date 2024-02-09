import React, { Component, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  ScrollView,
  Button,
} from "react-native";
import DateTimePicker from "react-native-ui-datepicker";

import dayjs from "dayjs";
import Starfield from "./Starfield";

const windowWidth = Dimensions.get("window").width;

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
            <BirthdayForm />
          </View>
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
    backgroundColor: "#000",
  },
  starfield: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
  },
  cardWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    // backgroundColor: `hsl(260, 100% 3%)`,
    backgroundColor: `white`,
    width: windowWidth / 1.4,
    aspectRatio: 1.5 / 1,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "sans-serif",
    borderRadius: 10,
  },
  text: {
    color: "rgb(255, 255, 255)",
  },
});

const BirthdayForm = () => {
  const initialTime = dayjs().subtract(18, "year");
  const [value, setValue] = useState(initialTime);
  const onChange = (event, selectedDate) => {
    setDate(selectedDate);
  };
  const [isShowResult, setIsShowResult] = useState(false);
  const resultDate = dayjs(value).add(1_000_000_000, "seconds");
  const now = dayjs();
  const isResultDatePast = now.diff(resultDate, "day") > 0;
  const isResultDateFuture = now.diff(resultDate, "day") < 0;
  const isResultDateToday = now.diff(resultDate, "day") === 0;
  const doSomething = () => {
    setIsShowResult(true);
  };
  return (
    <>
      <Text style={styles.text}>Enter your birthday below:</Text>
      <DateTimePicker
        mode="date"
        headerTextStyle={{ color: "white" }}
        todayTextStyle={{ color: "white" }}
        weekDaysTextStyle={{ color: "white" }}
        // calendarTextStyle={{ color: "white" }}
        selectedTextStyle={{ color: "white" }}
        timePickerTextStyle={{ color: "white" }}
        value={value}
        onValueChange={(date) => setValue(date)}
      />
      <Button title={"Go!"} onPress={doSomething} />
      <Text style={styles.text}>{`Your day is: ${resultDate
        .format("MMM-DD YYYY HH:mm:ss")
        .toString()}`}</Text>
    </>
  );
};
