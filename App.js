import React, { Component, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Button,
  SafeAreaView,
} from "react-native";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
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
    // color: "rgb(255, 255, 255)",
    color: "black",
  },
});

const BirthdayForm = () => {
  const initialTime = dayjs().subtract(18, "year");
  const [value, setValue] = useState(initialTime);
  const onChange = (event, selectedDate) => {
    setValue(dayjs(selectedDate));
  };
  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: new Date(value),
      onChange,
      mode: currentMode,
      is24Hour: false,
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
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
      <SafeAreaView>
        <Button onPress={showDatepicker} title="Enter your birth date!" />
        <Button onPress={showTimepicker} title="Update your birth time!" />
        <Text>selected: {dayjs(value).format("MMM-DD YYYY HH:mm A")}</Text>
      </SafeAreaView>
      <Button title={"Go!"} onPress={doSomething} />
      <Text style={styles.text}>{`Your billion-second birthday is: ${resultDate
        .format("MMM-DD YYYY HH:mm A")
        .toString()}`}</Text>
    </>
  );
};
