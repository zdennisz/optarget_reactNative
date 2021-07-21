import {
  Button,
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import TextInputController from "../Component/TextInputController";
import { GeneralImages } from "../Component/Images";
import { focal_length, detector_pitch } from "../Store/Actions/detectorSize";
import { useSelector, useDispatch } from "react-redux";
import Colors from "../Constants/Colors";
const DRICalculator = (props) => {
  const dispatch = useDispatch();
  const [isValid, setisValid] = useState();
  let TableComponent;
  const data = useSelector((state) => state.detectorSize);

  const focalLengthHandler = (val) => {
    dispatch(focal_length(val));
  };

  const detectorPitchHandler = (val) => {
    dispatch(detector_pitch(val));
  };

  if (isValid) {
    //Create table layout to fit the two tables that i have
    //TableComponent = <View></View>;
  } else {
    TableComponent = <View></View>;
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding" : "position"}
      >
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <TextInputController
              image={GeneralImages.focalLengthSrc}
              text="Focal Length (mm): "
              maxLength={2}
              handler={focalLengthHandler}
            />
            <TextInputController
              image={GeneralImages.pixelSizeSrc}
              text="Detector Pitch (mic):  "
              maxLength={2}
              handler={detectorPitchHandler}
            />
          </View>
          <View style={styles.btnContainer}>
            <Button title="Calculate"></Button>
          </View>
          <View style={styles.tableContainer}>{TableComponent}</View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputContainer: {
    flex: 1,
    width: "100%",
    minHeight: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  tableContainer: {
    flex: 1,
    width: "100%",
    minHeight: 50,
  },
  btnContainer: {
    flex: 1,
    width: "100%",
    flexDirection: "row-reverse",
    justifyContent: "flex-start",
    paddingHorizontal: 15,
  },
});

export default DRICalculator;
