import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import TextInputController from "../Component/TextInputController";
import TableLayout from "../Component/TableLayout";
import { GeneralImages } from "../Component/Images";

const DetectSize = (props) => {
  return (
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
      <View style={styles.button}>
        <Button title="Calculate"></Button>
      </View>
      <View style={styles.table}>
        <TableLayout />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputs: {
    flexGrow: 1,
  },
  button: {
    flexGrow: 1,
  },
  table: {
    flexGrow: 1,
  },
});

export default DetectSize;
