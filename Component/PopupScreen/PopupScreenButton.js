import React from "react";
import { Text, View, StyleSheet, Pressable, Image } from "react-native";

const PopupScreenButton = (props) => {
	const { action } = props;

	const pressHandler = () => {
		props.actionHandler(action);
	};
	return (
		<View style={styles.container}>
			<Pressable style={styles.contentContainer} onPress={pressHandler}>
				<Image source={props.image} />
				<Text style={styles.text}>{props.text}</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	contentContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		marginVertical: 20,
	},
});

export default PopupScreenButton;
