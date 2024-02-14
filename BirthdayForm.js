import React, { useState } from "react";
import { Text, Button, SafeAreaView } from "react-native";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import dayjs from "dayjs";

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
        <Text
          style={styles.text}
        >{`Your billion-second birthday is: ${resultDate
          .format("MMM-DD YYYY HH:mm A")
          .toString()}`}</Text>
      </>
    );
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