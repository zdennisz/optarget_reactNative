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
import { useSelector, useDispatch } from "react-redux";
import {
  focal_length,
  detector_pitch,
  target_distance,
  target_sizeWidth,
  target_sizeHeight,
} from "../Store/Actions/detectorSize";

const DetectSize = (props) => {
  const [isValid, setIsValid] = useState(false);
  let TableComponent;
  const dispatch = useDispatch();
  const data = useSelector((state) => state.detectorSize);

  const calculateDetSizeHandler = () => {
    Keyboard.dismiss();
    // only if the data is valid set the value to true else show error message and dont continue

    setIsValid(true);

    //TODO render the table
  };

  const focalLengthHandler = (val) => {
    dispatch(focal_length(val));
  };
  const detectorSizeHandler = (val) => {
    dispatch(detector_pitch(val));
  };
  const targetDistanceHandler = (val) => {
    dispatch(target_distance(val));
  };

  const target_sizeWidthHandler = (val) => {
    dispatch(target_sizeWidth(val));
  };
  const target_sizeHeightHandler = (val) => {
    dispatch(target_sizeHeight(val));
  };

  if (isValid) {
    TableComponent = <TableLayout inputData={data} />;
  } else {
    TableComponent = <View />;
  }

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
              maxLength={4}
              handler={focalLengthHandler}
            />
            <TextInputController
              image={GeneralImages[2].image}
              text="Detector Pitch (mic):"
              maxLength={2}
              handler={detectorSizeHandler}
            />
            <TextInputController
              image={GeneralImages[3].image}
              text="Target Distance (m):"
              maxLength={4}
              handler={targetDistanceHandler}
            />
            <TextInputController
              image={GeneralImages[4].image}
              twoInputValues={true}
              text="Target Size (m):"
              maxLength={2}
              handler={target_sizeWidthHandler}
              secondHandler={target_sizeHeightHandler}
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button
              title="Calculate"
              onPress={calculateDetSizeHandler}
            ></Button>
          </View>

          <View style={styles.table}>{TableComponent}</View>
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
