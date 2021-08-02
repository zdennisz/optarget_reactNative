import { StyleSheet, Text, View } from "react-native";
import React from "react";

const LenAngleInput = (props) => {
	return <Text style={styles.container}> Lens Angle Input</Text>;
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default LenAngleInput;
