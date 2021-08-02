import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Colors from "../Constants/Colors";
import { GeneralImages } from "../Constants/Images";
import TitleText from "./TitleText";

const DetecSizeTable = (props) => {
	const { inputData } = props;

	return (
		<View style={styles.container}>
			<View style={styles.firstRow}>
				<View style={styles.spacer}></View>
				<TitleText text='Width' />
				<TitleText text='Height' />
				<TitleText text='Total' />
			</View>
			<View style={styles.secondRow}>
				<Image style={styles.image} source={GeneralImages.dimensionSrc} />
				<Text>
					{Number.isNaN(inputData.width) ? "--" : inputData.width.toFixed(1)}
				</Text>
				<Text>
					{Number.isNaN(inputData.height) ? "--" : inputData.height.toFixed(1)}
				</Text>
				<Text>
					{Number.isNaN(inputData.total) ? "--" : inputData.total.toFixed(1)}
				</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	firstRow: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
		backgroundColor: Colors.SecondaryOrangeWhite,
		width: "100%",
	},
	secondRow: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
		backgroundColor: Colors.SecondaryOrangeDarker,
		width: "100%",
	},
	image: {
		maxWidth: 50,
		marginVertical: 10,
	},
	spacer: {
		marginVertical: 15,
		flexBasis: "32%",
	},
});

export default DetecSizeTable;
