import React from "react"
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  StatusBar,
  ImageBackground
} from "react-native"
import ListItem from "../components/ListItem"

const UpComingWeather = ({ weatherData }) => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0]?.main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )

  const { container, image } = styles

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/upcoming-background.jpg")}
        style={image}
      >
        {/* Lists need keys, like map lists do */}
        {/* renderItem and keyExtractor props look to be map functions that take a call back and map through the data prop. */}
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
          // ItemSeparatorComponent={() => (
          //   <View style={{ backgroundColor: "black", height: 2 }} />
          // )}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "royalblue"
  },
  image: {
    paddingTop: StatusBar.currentHeight || 0,
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
})

export default UpComingWeather
