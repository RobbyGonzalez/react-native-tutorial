import React from "react"
import { ActivityIndicator, View, StyleSheet } from "react-native"
import Tabs from "./src/components/Tabs"
import useGetWeather from "./src/hooks/useGetWeather"
import ErrorItem from "./src/components/ErrorItem"

const App = () => {
  //Using the custom hook! Our hook only returns values. Not set functions that re-render.
  //Custom hooks are just functions that return values. They are not components that render, but still use the react framework.
  const { isLoading, error, weather } = useGetWeather()
  console.log("app.js: ", weather, isLoading, error)

  if (weather && weather.list) {
    console.log("weather app.js: ", weather)
    return <Tabs weather={weather} />
  }

  return (
    <View style={styles.container}>
      {error ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator size={"large"} color={"blue"} />
      )}
      {/* This is the the loading icon above */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  }
})

export default App
