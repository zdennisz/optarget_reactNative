import React from "react";
import { Text, View, StyleSheet } from "react-native";

const TableLayout = (props) => {
  const { inputData } = props;
  console.log(inputData);

  return <Text style={style.container}>Table res</Text>;
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TableLayout;
