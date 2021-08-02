import React from "react";
import {
	View,
	StyleSheet,
	Modal,
	TouchableWithoutFeedback,
	Dimensions,
} from "react-native";
import PopupScreenButton from "./PopupScreenButton";
import { GeneralImages, FieldOfViewImages } from "../../Constants/Images";
import Colors from "../../Constants/Colors";

const PopupScreen = (props) => {
	const { visibility } = props;

	const pressingHandler = (value) => {
		props.handler(value);
	};

	return (
		<Modal
			animationType='none'
			transparent={true}
			visible={visibility}
			onRequestClose={pressingHandler.bind(this, "close")}
		>
			<TouchableWithoutFeedback onPress={pressingHandler.bind(this, "close")}>
				<View
					style={styles.modalContainer}
					onPress={pressingHandler.bind(this, "close")}
				>
					<View style={styles.container}>
						<View style={styles.buttonContainer}>
							<View>
								<PopupScreenButton
									actionHandler={pressingHandler}
									action='target'
									text='Target Size Input'
									image={GeneralImages.taretSizeSrc}
								/>
								<PopupScreenButton
									actionHandler={pressingHandler}
									action='angle'
									text='Angle Input'
									image={FieldOfViewImages.ifovSrc}
								/>
							</View>
						</View>
					</View>
				</View>
			</TouchableWithoutFeedback>
		</Modal>
	);
};

const styles = StyleSheet.create({
	modalContainer: {
		backgroundColor: "rgba(0,0,0,0.7)",
		height: "100%",
	},
	container: {
		justifyContent: "center",
		alignItems: "center",
		width: Dimensions.get("window").width / 2,
		height: Dimensions.get("window").height / 2,
		top: Dimensions.get("window").width / 1.9,
		left: Dimensions.get("window").height / 7,
	},
	buttonContainer: {
		flex: 1,
		justifyContent: "space-around",
		alignItems: "center",
		backgroundColor: "white",
		padding: 20,
		borderRadius: 20,
	},
});

export default PopupScreen;
