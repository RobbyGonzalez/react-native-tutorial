import React from "react"
import {
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  View
} from "react-native"
import IconText from "../components/IconText"
import moment from "moment"

const City = ({ weatherData }) => {
  const {
    container,
    imageLayout,
    cityName,
    countryName,
    cityText,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
    rowLayout
  } = styles

  const { name, country, population, sunrise, sunset } = weatherData

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/city-background.jpg")}
        style={imageLayout}
      >
        {/* passing the style object an array of styles will merge them together into one object. So you don't have to duplicate style attributes. */}
        <Text style={[cityName, cityText]}>{name}</Text>
        <Text style={[countryName, cityText]}>{country}</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={"user"}
            iconColor={"red"}
            bodyText={`Population: ${population}`}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={"sunrise"}
            iconColor={"white"}
            bodyText={moment(sunrise).format("h:mm a")}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName={"sunset"}
            iconColor={"white"}
            bodyText={moment(sunset).format("h:mm a")}
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // marginTop: StatusBar.currentHeight || 0
  },
  imageLayout: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  cityName: {
    fontSize: 40
  },
  countryName: {
    fontSize: 30
  },
  cityText: {
    fontWeight: "bold",
    color: "white",
    justifyContent: "center",
    alignSelf: "center"
  },
  populationWrapper: {
    justifyContent: "center",
    marginTop: 30
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "red"
  },
  riseSetWrapper: {
    justifyContent: "space-around",
    marginTop: 30
  },
  riseSetText: {
    fontSize: 20,
    color: "white"
  },
  rowLayout: {
    flexDirection: "row",
    alignItems: "center"
  }
})

export default City
