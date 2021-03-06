import React from "react";
import { TouchableOpacity, Text, Image, StyleSheet } from "react-native";

const HomeScreenButton = (props) => {
	const navigateHandler = () => {
		props.navigate();
	};

	return (
		<TouchableOpacity style={styles.container} onPress={navigateHandler}>
			<Image style={styles.innerImg} source={props.img} />
			<Text style={styles.text}>{props.title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		marginVertical: 10,
		fontSize: 22,
		textAlign: "center",
	},
	innerImg: {
		marginVertical: 14,
	},
});

export default HomeScreenButton;
