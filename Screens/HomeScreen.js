import { View, StyleSheet } from "react-native";
import React from "react";
import HomeScreenButton from "../Component/HomeScreenButton";
import { Images } from "../Component/Images";

const HomeScreen = (props) => {
  const { navigation } = props;

  const detectorSizeHandler = () => {
    navigation.navigate("DetectSize");
  };
  const driCalcHandler = () => {
    navigation.navigate("DriCalc");
  };

  const fovCalcHandler = () => {
    navigation.navigate("FieldOfView");
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <HomeScreenButton
          title="Required Lens Calculator"
          img={Images.requiredLensSrc}
          navigate={() => {
            console.log("Button was pressed");
          }}
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
