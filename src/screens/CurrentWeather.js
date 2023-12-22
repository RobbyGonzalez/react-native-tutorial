import React from "react"
import { StyleSheet, Text, View, SafeAreaView, Platnpmform } from "react-native"
import { Feather } from "@expo/vector-icons"
import RowText from "../components/RowText"
import { weatherType } from "../utils/weatherType"

const CurrentWeather = () => {
  const {
    highLowWrapper,
    highlow,
    bodyWrapper,
    description,
    message,
    temp,
    feels
  } = styles

  return (
    // SafeAreaView is a wrapper that makes sure the content is not hidden by the notch or the home bar
    <SafeAreaView style={styles.wrapper}>
      {/* View is like a div */}
      <View
        style={{
          ...styles.container
        }}
      >
        <Feather name="sun" size={100} color="black" />
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>
        <RowText
          messageOne={"High: 8"}
          messageTwo={"Low: 6"}
          containerStyles={highLowWrapper}
          messageOneStyles={highlow}
          messageTwoStyles={highlow}
        />
      </View>
      <RowText
        messageOne={"It's Sunny"}
        messageTwo={weatherType["Thunderstorm"].message}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  )
}

// Could use marginTop: StatusBar.currentHeight || 0 rather than Platform.OS === "android" ? 30 : 0
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 30 : 0,
    backgroundColor: "orange"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  temp: {
    fontSize: 48,
    color: "black"
  },
  feels: {
    fontSize: 30,
    color: "black"
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40
  },
  highlow: {
    fontSize: 20,
    color: "black"
  },
  highLowWrapper: {
    flexDirection: "row"
  },
  description: {
    fontSize: 48,
    color: "black"
  },
  message: {
    fontSize: 30,
    color: "black"
  }
})

export default CurrentWeather
