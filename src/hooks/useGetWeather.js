//This is a custom hook that will fetch the weather data

import React, { useState, useEffect } from "react"
import * as Location from "expo-location"
//"npm install -D react-native-dotenv" slightly different from web apps. Config in babel.config.js after installing
import { API_KEY } from "@env"

const useGetWeather = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [weather, setWeather] = useState([])
  const [longitude, setLongitude] = useState(null)
  const [latitude, setLatitude] = useState(null)

  const fetchWeatherData = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=imperial`
      const response = await fetch(url)
      const data = await response.json()
      setWeather(data)
    } catch (error) {
      setError("Could not load weather data")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    console.log("useEffect")
    ;(async () => {
      //Get permission for location first
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== "granted") {
        setError("Permission to access location was denied")
        return
      }
      //If permission granted, get location
      let location = await Location.getCurrentPositionAsync({})
      const { latitude, longitude } = location.coords
      setLongitude(longitude)
      setLatitude(latitude)
      await fetchWeatherData()
    })()
  }, [longitude, latitude])

  return { isLoading, error, weather }
}

export default useGetWeather
