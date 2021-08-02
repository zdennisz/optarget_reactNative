import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const OutputTextView = (props) => {
	return (
		<View style={styles.container}>
			<Image style={styles.image} source={props.image}></Image>
			<View style={styles.text}>
				<Text>{props.text}</Text>
			</View>
			<View>
				{props.resLength ? (
					<Text>{props.result.toFixed(props.resLength)}</Text>
				) : (
					<Text>{props.result}</Text>
				)}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		width: "90%",
	},
	image: {
		marginEnd: 12,
	},
	text: {
		marginEnd: 15,
	},
});

export default OutputTextView;
