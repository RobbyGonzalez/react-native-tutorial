import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Feather } from "@expo/vector-icons"

const ListItem = ({ condition, dt_txt, min, max }) => {
  const { item, temp, date } = styles

  return (
    <View style={item}>
      <Feather name={"sun"} size={50} color={"white"}>
        {/* {condition} */}
      </Feather>
      <Text style={date}>{dt_txt}</Text>
      <Text style={temp}>{min}</Text>
      <Text style={temp}>{max}</Text>
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
    backgroundColor: "lightblue",
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
  }
})

export default ListItem
