import {
  Button,
  StyleSheet,
  View,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Alert,
} from "react-native";
import React, { useState } from "react";
import TextInputController from "../Component/TextInputController";
import DetecSizeTable from "../Component/DetecSizeTable";
import { GeneralImages } from "../Constants/Images";
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
  const [fl, setFl] = useState(false)
  const [det_pitch, setDet_Pitch] = useState(false)
  const [targetDis, setTargetDis] = useState(false)
  const [targetSizeW, setTargetSizeW] = useState(false)
  const [targetSizeH, setTargetSizeH] = useState(false)

  const calculateDetSizeHandler = () => {
    Keyboard.dismiss();
    // only if the data is valid set the value to true else show error message and dont continue
    if (fl && det_pitch && targetDis && targetSizeH && targetSizeW) {
      Alert.alert(
        "Error !",
        "Please fill all the fields !"
      )
    } else {
      setIsValid(true);
    }

  };

  const focalLengthHandler = (val) => {
    dispatch(focal_length(val));
    if (val != "") {
      setFl(true)
    } else {
      setFl(false)
    }
  };
  const detectorSizeHandler = (val) => {
    dispatch(detector_pitch(val));
    if (val != "") {
      setDet_Pitch(true)
    } else {
      setDet_Pitch(false)
    }
  };
  const targetDistanceHandler = (val) => {
    dispatch(target_distance(val));
    if (val != "") {
      setTargetDis(true)
    } else {
      setTargetDis(false)
    }
  };

  const target_sizeWidthHandler = (val) => {
    dispatch(target_sizeWidth(val));
    if (val != "") {
      setTargetSizeW(true)
    } else {
      setTargetSizeW(false)
    }
  };
  const target_sizeHeightHandler = (val) => {
    dispatch(target_sizeHeight(val));
    if (val != "") {
      setTargetSizeH(true)
    } else {
      setTargetSizeH(false)
    }
  };

  const calculateOutputHandler = (storeValues) => {
    const ifov = storeValues.detectorPitch / (storeValues.focalLength * 1000);
    const width =
      storeValues.targetSize.width / (ifov * storeValues.targetDistance);
    const height =
      storeValues.targetSize.height / (ifov * storeValues.targetDistance);
    const total = height * width;
    return {
      width: width,
      height: height,
      total: total,
    };
  };

  if (isValid) {
    const calculatedData = calculateOutputHandler(data);
    TableComponent = <DetecSizeTable inputData={calculatedData} />;
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
              maxLength={3}
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
