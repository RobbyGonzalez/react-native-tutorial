import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Feather } from "@expo/vector-icons"
import { weatherType } from "../utils/weatherType"
import moment from "moment"

const ListItem = ({ condition, dt_txt, min, max }) => {
  const { item, temp, date, dateTextWrapper } = styles

  return (
    <View style={item}>
      <Feather
        name={weatherType[condition].icon}
        size={50}
        color={"white"}
      ></Feather>
      <View style={dateTextWrapper}>
        <Text style={date}>{moment(dt_txt).format("dddd")}</Text>
        <Text style={date}>{moment(dt_txt).format("h:mm a")}</Text>
      </View>
      <Text style={temp}>
        {Math.round(min)}°/{Math.round(max)}°
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 5,
    backgroundColor: "indianred",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  temp: {
    fontSize: 20,
    color: "white"
  },
  date: {
    fontSize: 15,
    color: "white"
  },
  dateTextWrapper: {
    flexDirection: "column"
  }
})

export default ListItem
