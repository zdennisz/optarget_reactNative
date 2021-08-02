import {
	Button,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import TextInputController from "../Component/TextInputController";
import React from "react";
import { GeneralImages } from "../Constants/Images";
import Colors from "../Constants/Colors";
import { useDispatch, useSelector } from "react-redux";

const Settings = (props) => {
	const settingsData = useSelector((state) => state.settings);
	const detectorData = useSelector((state) => state.detectorSize);
	const dispatch = useDispatch();

	return (
		<ScrollView>
			<View style={styles.container}>
				<View>
					<Text style={styles.title}>Line Pairs:</Text>
				</View>
				<View style={styles.linePair}>
					<TextInputController
						text='Detection'
						image={GeneralImages.linePairSrc}
						maxLength={4}
						defaultValue={{ first: settingsData.linePairDet }}
					/>
					<TextInputController
						text='Detection (Obj.)'
						image={GeneralImages.linePairSrc}
						maxLength={4}
						defaultValue={{ first: settingsData.linepairDetObj }}
					/>
					<TextInputController
						text='Recognition'
						image={GeneralImages.linePairSrc}
						maxLength={4}
						defaultValue={{ first: settingsData.linePairRec }}
					/>
					<TextInputController
						text='identification'
						image={GeneralImages.linePairSrc}
						maxLength={4}
						defaultValue={{ first: settingsData.linePairIdent }}
					/>
				</View>
				<View style={styles.seperatorLine}></View>
				<Text style={styles.title}>Target Size (m):</Text>
				<View style={styles.targetSize}>
					<TextInputController
						text='Nato Target'
						image={GeneralImages.taretSizeSrc}
						twoInputValues={true}
						maxLength={3}
						defaultValue={{
							first: settingsData.nato.width,
							second: settingsData.nato.height,
						}}
					/>
					<TextInputController
						text='Human Target'
						image={GeneralImages.taretSizeSrc}
						twoInputValues={true}
						maxLength={3}
						defaultValue={{
							first: settingsData.human.width,
							second: settingsData.human.height,
						}}
					/>
					<TextInputController
						text='Object Target'
						image={GeneralImages.taretSizeSrc}
						twoInputValues={true}
						maxLength={3}
						defaultValue={{
							first: settingsData.obj.width,
							second: settingsData.obj.height,
						}}
					/>
				</View>
				<View style={styles.seperatorLine}></View>
				<View>
					<Text style={styles.title}>Detector Settings (px):</Text>
				</View>
				<View style={styles.detectorSize}>
					<TextInputController
						text='Detector Size'
						image={GeneralImages.dimensionSrc}
						twoInputValues={true}
						maxLength={4}
						defaultValue={{
							first: settingsData.detectorSize.width,
							second: settingsData.detectorSize.height,
						}}
					/>
					<TextInputController
						text='Detector Pitch (mic)'
						image={GeneralImages.pixelSizeSrc}
						maxLength={2}
						defaultValue={{ first: detectorData.detectorPitch }}
					/>
				</View>
				<View style={styles.buttonContainer}>
					<Button
						color={Platform.OS === "android" ? Colors.Primary : "#007AFF"}
						title='Default'
						onPress={() => {}}
					></Button>
					<Button
						color={
							Platform.OS === "android"
								? Colors.SecondaryOrangeDarker
								: "#007AFF"
						}
						title='Save'
						onPress={() => {}}
					></Button>
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "space-between",
		paddingVertical: 20,
	},
	buttonContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		width: "100%",
		marginVertical: 20,
	},
	seperatorLine: {
		width: "70%",
		height: 5,
		backgroundColor: Colors.LineSeperator,
		marginVertical: 20,
	},
	title: {
		fontSize: 20,
		marginVertical: 20,
		fontWeight: "bold",
	},
	linePair: {
		flex: 1,
		justifyContent: "space-between",
		minHeight: 200,
	},
	targetSize: {
		flex: 1,
		justifyContent: "space-between",
		minHeight: 150,
	},
	detectorSize: {
		flex: 1,
		justifyContent: "space-between",
		minHeight: 100,
	},
});

export default Settings;
