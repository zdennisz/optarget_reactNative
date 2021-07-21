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
import Colors from "../Constants/Colors";

const DetectSize = (props) => {
  const [isValid, setIsValid] = useState(false);
  let TableComponent;
  const dispatch = useDispatch();
  const data = useSelector((state) => state.detectorSize);

  const calculateDetSizeHandler = () => {
    Keyboard.dismiss();
    // only if the data is valid set the value to true else show error message and dont continue

    setIsValid(true);
  };

  const focalLengthHandler = (val) => {
    dispatch(focal_length(parseInt(val, 10)));
  };
  const detectorSizeHandler = (val) => {
    dispatch(detector_pitch(parseInt(val, 10)));
  };
  const targetDistanceHandler = (val) => {
    dispatch(target_distance(parseInt(val, 10)));
  };

  const target_sizeWidthHandler = (val) => {
    dispatch(target_sizeWidth(parseInt(val, 10)));
  };
  const target_sizeHeightHandler = (val) => {
    dispatch(target_sizeHeight(parseInt(val, 10)));
  };

  const calculateOutputHandler = (storeValues) => {
    let ifov = storeValues.detectorPitch / (storeValues.focalLength * 1000);
    let width =
      storeValues.targetSize.width / (ifov * storeValues.targetDistance);
    let height =
      storeValues.targetSize.height / (ifov * storeValues.targetDistance);
    let total = height * width;
    return {
      width: width,
      height: height,
      total: total,
    };
  };

  if (isValid) {
    const calculatedData = calculateOutputHandler(data);
    TableComponent = <TableLayout inputData={calculatedData} />;
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
              image={GeneralImages.focalLengthSrc}
              text="Focal Length (mm):"
              maxLength={4}
              handler={focalLengthHandler}
            />
            <TextInputController
              image={GeneralImages.pixelSizeSrc}
              text="Detector Pitch (mic):"
              maxLength={2}
              handler={detectorSizeHandler}
            />
            <TextInputController
              image={GeneralImages.targetRangeSrc}
              text="Target Distance (m):"
              maxLength={4}
              handler={targetDistanceHandler}
            />
            <TextInputController
              image={GeneralImages.taretSizeSrc}
              twoInputValues={true}
              text="Target Size (m):"
              maxLength={2}
              handler={target_sizeWidthHandler}
              secondHandler={target_sizeHeightHandler}
            />
          </View>

          <View style={styles.buttonContainer}>
            <Button
              color={Platform.OS === "android" ? Colors.Primary : "#147efb"}
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
    marginVertical: 25,
  },
  table: {
    flex: 7,
    minHeight: 50,
    width: "100%",
    marginVertical: 35,
  },
});

export default DetectSize;
