import { StyleSheet, View, Button, Keyboard, KeyboardAvoidingView, Alert } from "react-native";
import React, { useState } from "react";
import TextInputController from "../Component/TextInputController";
import { FieldOfViewImages, GeneralImages } from "../Constants/Images";
import OutputTextView from "../Component/OutputTextView";
import { useSelector, useDispatch } from "react-redux";
import { detector_pitch, focal_length } from "../Store/Actions/detectorSize";
import { detector_size_width, detector_size_height } from "../Store/Actions/settings"



const FieldOfView = (props) => {
  const [isValid, setIsValid] = useState(false)
  const settingsData = useSelector((state) => state.settings)
  const detectorData = useSelector((state) => state.detectorSize)
  const [focalLength, setFocalLength] = useState(false)
  const [detPitch, setDetPitch] = useState(false)
  const [det_w, setDet_w] = useState(false)
  const [det_h, setDet_h] = useState(false)
  const [result, setResult] = useState()
  const dispatch = useDispatch();

  const detectorSizeWidthHandler = (val) => {
    dispatch(detector_size_width(val))
    if (val != "") {
      setDet_w(true)
    } else {
      setDet_w(false)
    }

  }

  const detectorSizeHeightHandler = (val) => {
    dispatch(detector_size_height(val))
    if (val != "") {
      setDet_h(true)
    } else {
      setDet_h(false)
    }

  }

  const detectorPitchHandler = (val) => {
    dispatch(detector_pitch(val))
    if (val != "") {
      setDetPitch(true)
    } else {
      setDetPitch(false)
    }


  }

  const focalLengthHandler = (val) => {
    dispatch(focal_length(val))
    if (val != "") {
      setFocalLength(true)
    } else {
      setFocalLength(false)
    }

  }

  const calcHandler = () => {

    if (focalLength && detPitch && det_w && det_h) {
      const hFovVal = calcHfov(detectorData.detectorPitch, settingsData.detectorSize.width, detectorData.focalLength)

      const vFovVal = calcVfov(settingsData.detectorSize.height, settingsData.detectorSize.width, hFovVal)

      const ifovval = calcIfov(detectorData.detectorPitch, detectorData.focalLength)

      const result = {
        hfov: hFovVal,
        vfov: vFovVal,
        ifov: ifovval
      }

      setResult(result)
      setIsValid(true)
      Keyboard.dismiss()
    } else {
      Alert.alert(
        "Missing Data",
        "Please fill all the fields !",

      )
      setIsValid(false)
    }


  }

  const calcIfov = (sp, fl) => {
    return sp / (fl * 1000);
  }
  const calcVfov = (dimH, dimW, hfov) => {
    return hfov * (dimH / dimW)
  }
  const calcHfov = (sp, szW, fl) => {
    return 2 * Math.atan((sp * szW) /
      (2000 * fl)) * (2 * 90) / Math.PI;

  }

  return (

    <KeyboardAvoidingView
      behavior={Platform.OS === "android" ? "padding" : "position"}
    >
      <View style={styles.container}>
        <View style={styles.input}>
          <TextInputController
            image={GeneralImages.focalLengthSrc}
            text="Focal Length (mm):"
            maxLength={2}
            handler={focalLengthHandler} />
          <TextInputController
            image={GeneralImages.pixelSizeSrc}
            text="Detector Pitch (mic):"
            maxLength={2}
            handler={detectorPitchHandler} />
          <TextInputController
            image={GeneralImages.dimensionSrc}
            text="Detector Size (px):"
            twoInputValues={true}
            maxLength={4}
            handler={detectorSizeWidthHandler}
            secondHandler={detectorSizeHeightHandler} />
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Calculate" onPress={calcHandler}></Button>
          </View>
        </View>
        <View style={styles.outputContainer}>
          {isValid &&
            <View style={styles.outputCom}>
              <OutputTextView text="HFOV (deg):" image={FieldOfViewImages.hfovSrc} result={result.hfov} resLength={1} />
              <OutputTextView text="VFOV (deg):" image={FieldOfViewImages.vfovSrc} result={result.vfov} resLength={1} />
              <OutputTextView text="IFOV (deg):" image={FieldOfViewImages.ifovSrc} result={result.ifov} />
            </View>
          }
        </View>
      </View>
    </KeyboardAvoidingView>

  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%"
  },
  input: {
    minHeight: 220

  },
  buttonContainer: {
    minHeight: 50,
    width: "100%",
    alignItems: 'flex-end'

  },
  outputContainer: {
    minHeight: 250,
    width: '100%',
    justifyContent: 'space-around',

  },
  button: {
    marginRight: 15,

  },
  outputCom: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  }
});

export default FieldOfView;
