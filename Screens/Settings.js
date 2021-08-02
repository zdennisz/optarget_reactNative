import {
	KeyboardAvoidingView,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React from "react";

const Settings = (props) => {
	return (
		<ScrollView>
			<KeyboardAvoidingView>
				<View style={styles.container}>
					<Text>Settings screen</Text>
				</View>
			</KeyboardAvoidingView>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default Settings;
