import { View, StyleSheet, Modal, Text } from "react-native";
import React from "react";
import HomeScreenButton from "../Component/HomeScreenButton";
import { Images } from "../Constants/Images";
import { useState } from "react";
import PopupScreen from "../Component/PopupScreen/PopupScreen";

const HomeScreen = (props) => {
  const { navigation } = props;

  const [modalVisible, setModalVisible] = useState(false)

  const detectorSizeHandler = () => {
    navigation.navigate("DetectSize");
  };
  const driCalcHandler = () => {
    navigation.navigate("DriCalc");
  };

  const fovCalcHandler = () => {
    navigation.navigate("FieldOfView");
  };

  const requiredLensHandler = () => {
    setModalVisible(modalVisible => !modalVisible)

  }
  const operateModalHandler = (value) => {
    switch (value) {
      case 'close':
        setModalVisible(modalVisible => !modalVisible);
        break;
      case 'angle':
        setModalVisible(modalVisible => !modalVisible);
        navigation.navigate("LensAngleInput");
        break;
      case 'target':
        setModalVisible(modalVisible => !modalVisible);
        navigation.navigate("LensTargetInput");
        break;
    }

  }

  return (
    <View style={styles.container}>
      {modalVisible && <PopupScreen handler={operateModalHandler} visibility={modalVisible} />}
      <View style={styles.row}>
        <HomeScreenButton
          title="Required Lens Calculator"
          img={Images.requiredLensSrc}
          navigate={requiredLensHandler}
        />
        <HomeScreenButton
          title="Detector Size Calculator"
          img={Images.dimensionsSrc}
          navigate={detectorSizeHandler}
        />
      </View>
      <View style={styles.row}>
        <HomeScreenButton
          title="Field Of View Calculator"
          img={Images.fieldOfViewSrc}
          navigate={fovCalcHandler}
        />
        <HomeScreenButton
          title="DRI Calculator"
          img={Images.driCalculatorSrc}
          navigate={driCalcHandler}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    flex: 1,
  },
});

export default HomeScreen;
