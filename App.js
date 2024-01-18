import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
} from "react-native";
import DateTimePicker from "react-native-ui-datepicker";
import DatePicker from "react-native-datepicker";

import dayjs from "dayjs";
import { useState, Component } from "react";

export default function App() {
  const initialTime = dayjs().subtract(18, "year");
  const [value, setValue] = useState(initialTime);
  const [isShowResult, setIsShowResult] = useState(false);
  const resultDate = dayjs(value).add(1_000_000_000, "seconds");
  const now = dayjs();
  const isResultDatePast = now.diff(resultDate, "day") > 0;
  const isResultDateFuture = now.diff(resultDate, "day") < 0;
  const isResultDateToday = now.diff(resultDate, "day") === 0;
  const doSomething = () => {
    se0tIsShowResult(true);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://reactnative.dev/docs/assets/p_cat2.png",
          }}
          style={{ width: 200, height: 200 }}
        />
        <Text>Enter your birthday below:</Text>
        <DateTimePicker
          value={value}
          onValueChange={(date) => setValue(date)}
        />
        <Button
          title={
            "Calculate My Billion-Second-Birthday (billionth birthsecond)!"
          }
          onPress={doSomething}
        />
        <Text>{`Your day is: ${resultDate
          .format("MMM-DD YYYY HH:mm:ss")
          .toString()}`}</Text>

        <StatusBar style="auto" />
      </View>
      <View>
        <Text>This is another native date picker:</Text>
        <MyDatePicker />
        {/* <DatePicker
          style={{ width: 200 }}
          date={value}
          mode={"date"}
          placeholder={"select date"}
          format={"YYYY-MM-DD"}
          minDate={"2016-05-01"}
          maxDate={"2016-06-01"}
          confirmBtnText={"Confirm"}
          cancelBtnText={"Cancel"}
          customStyles={{
            dateIcon: {
              position: "absolute",
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => setValue(date)}
        /> */}
      </View>
    </ScrollView>
  );
}

class MyDatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = { date: "2016-05-15" };
  }

  render() {
    return (
      <DatePicker
        style={{ width: 200 }}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: "absolute",
            left: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            marginLeft: 36,
          },
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {
          this.setState({ date: date });
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
