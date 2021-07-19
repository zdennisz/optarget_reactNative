import {
  Button,
  StyleSheet,
  View,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import TextInputController from "../Component/TextInputController";
import TableLayout from "../Component/TableLayout";
import { GeneralImages } from "../Component/Images";

const DetectSize = (props) => {
  const [isValid, setIsValid] = useState(false);

  const calculateDetSizeHandler = () => {
    setIsValid(true);

    Keyboard.dismiss();

    //TODO render the table
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : "position"}
      >
        <View style={styles.container}>
          <View style={styles.inputs}>
            <TextInputController
              image={GeneralImages[1].image}
              text="Focal Length (mm):"
            />
            <TextInputController
              image={GeneralImages[2].image}
              text="Detector Pitch (mic):"
            />
            <TextInputController
              image={GeneralImages[3].image}
              text="Target Distance (m):"
            />
            <TextInputController
              image={GeneralImages[4].image}
              twoInputValues={true}
              text="Target Size (m):"
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button
              title="Calculate"
              onPress={calculateDetSizeHandler}
            ></Button>
          </View>

          <View style={styles.table}>{isValid ? <TableLayout /> : null}</View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputs: {
    height: "35%",
    flexGrow: 3,
    minHeight: 250,
  },
  buttonContainer: {
    flex: 4,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    marginEnd: 25,
  },
  table: {
    flex: 7,
    minHeight: 50,
    width: "100%",
  },
});

export default DetectSize;
