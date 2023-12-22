import React from "react"
import { StyleSheet, Text, View, SafeAreaView, Platnpmform } from "react-native"
import { Feather } from "@expo/vector-icons"
import RowText from "../components/RowText"
import { weatherType } from "../utils/weatherType"

const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    highLowWrapper,
    highlow,
    bodyWrapper,
    description,
    message,
    tempStyles,
    feels
  } = styles

  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather
  } = weatherData
  //##########"?." means that you are optionally chaining the object. If the object is undefined, it will not throw an error.############
  const weatherCondition = weather[0]?.main

  return (
    // SafeAreaView is a wrapper that makes sure the content is not hidden by the notch or the home bar
    //Dynamically set the background color based on the weather condition using the weatherType utility object
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition]?.backgroundColor }
      ]}
    >
      {/* View is like a div */}
      <View
        style={{
          ...styles.container
        }}
      >
        <Feather
          name={weatherType[weatherCondition]?.icon}
          size={100}
          color="white"
        />
        <Text style={tempStyles}>{`${Math.round(temp)}°`}</Text>
        <Text style={feels}>{`Feels like ${Math.round(feels_like)}°`}</Text>
        <RowText
          messageOne={`High: ${Math.round(temp_max)}° `}
          messageTwo={`Low: ${Math.round(temp_min)}°`}
          containerStyles={highLowWrapper}
          messageOneStyles={highlow}
          messageTwoStyles={highlow}
        />
      </View>
      <RowText
        messageOne={weather[0]?.description}
        messageTwo={weatherType[weatherCondition].message}
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
    paddingTop: Platform.OS === "android" ? 30 : 0
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  tempStyles: {
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
    fontSize: 43,
    color: "black"
  },
  message: {
    fontSize: 25,
    color: "black"
  }
})

export default CurrentWeather
