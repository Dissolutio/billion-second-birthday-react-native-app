import React from "react";
import { Text, Button, View, Animated, StyleSheet } from "react-native";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import dayjs from "dayjs";

export const BirthdayForm = () => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const initialTime = dayjs().subtract(18, "year");
  const [value, setValue] = React.useState(initialTime);
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

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
  const [isShowResult, setIsShowResult] = React.useState(false);
  const selectedDate = dayjs(value);
  const resultDate = dayjs(value).add(1_000_000_000, "seconds");
  const now = dayjs();
  const isResultDatePast = now.diff(resultDate, "day") > 0;
  const isResultDateFuture = now.diff(resultDate, "day") < 0;
  const isResultDateToday = now.diff(resultDate, "day") === 0;
  const doSomething = () => {
    if (!isShowResult) {
      setIsShowResult(true);
      fadeIn();
    } else {
      setIsShowResult(false);
      fadeOut();
    }
  };
  return (
    <>
      <Animated.View
        style={[
          {
            // Bind opacity to animated value
            opacity: fadeAnim,
          },
        ]}
      >
        <AppText text={selectedDate.format("MMM-DD YYYY HH:mm A").toString()} />
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <Button onPress={showDatepicker} title="Set date" />
          <Button onPress={showTimepicker} title="Set time" />
        </View>
        <AppText
          text={`selected: ${dayjs(value).format("MMM-DD YYYY HH:mm A")}`}
        />
        <Button title={"Go!"} onPress={doSomething} />
      </Animated.View>
      <Animated.View
        style={[
          {
            // Bind opacity to animated value
            opacity: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
          },
        ]}
      >
        <AppText
          text={`Your billion-second birthday is: ${resultDate
            .format("MMM-DD YYYY HH:mm A")
            .toString()}`}
        />
        <Button title={"Enter another birthday!"} onPress={doSomething} />
      </Animated.View>
      <View style={{}}></View>
    </>
  );
};

const styles = StyleSheet.create({
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16,
  },
});

const AppText = ({ text }) => {
  return (
    <Text
      style={{
        color: "#fff",
      }}
    >
      {text ?? ""}
    </Text>
  );
};
