import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet, Image } from "react-native";

const TextInputController = (props) => {
  const [input, setInput] = useState();
  const [secondInput, setSecondInput] = useState();

  const changeTextHandler = (event) => {
    props.handler(event);
  };

  const changeTextSecondHandler = (event) => {
    props.secondHandler(event);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={props.image}></Image>
      <Text style={styles.text}>{props.text}</Text>
      {props.twoInputValues ? (
        <View style={styles.twoInput}>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            value={input}
            onChangeText={changeTextHandler}
            maxLength={props.maxLength}
          ></TextInput>
          <Text style={styles.xSpacing}>X</Text>
          <TextInput
            style={styles.input}
            keyboardType="number-pad"
            value={secondInput}
            onChangeText={changeTextSecondHandler}
            maxLength={props.maxLength}
          ></TextInput>
        </View>
      ) : (
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          value={input}
          onChangeText={changeTextHandler}
          maxLength={props.maxLength}
        ></TextInput>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "90%",
  },
  input: {
    height: 20,
    borderBottomWidth: 1,
    flexGrow: 100,
    textAlign: "center",
  },
  twoInput: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    marginEnd: 12,
  },
  text: {
    marginEnd: 8,
  },
  xSpacing: {
    marginHorizontal: 20,
  },
});

export default TextInputController;
