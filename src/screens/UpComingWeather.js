import React from "react"
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  StatusBar,
  ImageBackground
} from "react-native"
import ListItem from "../components/ListItem"

const DATA = [
  {
    main: {
      temp_min: 6.76,
      temp_max: 7.87
    },
    weather: [
      {
        main: "Rain"
      }
    ],
    dt_txt: "2022-08-30 15:00:00"
  },
  {
    main: {
      temp_min: 2.84,
      temp_max: 5.45
    },
    weather: [
      {
        main: "Rain"
      }
    ],
    dt_txt: "2022-08-30 18:00:00"
  },
  {
    main: {
      temp_min: 0.31,
      temp_max: 2.46
    },
    weather: [
      {
        main: "Rain"
      }
    ],
    dt_txt: "2022-08-30 21:00:00"
  }
]

const UpComingWeather = () => {
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
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
        <Text>UpComingWeather</Text>
        {/* Lists need keys, like map lists do */}
        {/* renderItem and keyExtractor props look to be map functions that take a call back and map through the data prop. */}

        <FlatList
          data={DATA}
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
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
    // alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "royalblue"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
})

export default UpComingWeather
