import {
	Button,
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
import {
	line_pair_det,
	line_pair_det_Obj,
	line_pair_rec,
	line_pair_ident,
	target_size_nato_width,
	target_size_nato_height,
	target_size_human_width,
	target_size_human_height,
	target_size_obj_width,
	target_size_obj_height,
	detector_size_width,
	detector_size_height,
	detector_pitch,
} from "../Store/Actions/settings";
const Settings = (props) => {
	const settingsData = useSelector((state) => state.settings);
	const detectorData = useSelector((state) => state.detectorSize);
	const dispatch = useDispatch();

	const linePairDetHanlder = (val) => {
		dispatch(line_pair_det(val));
	};
	const linePairDeObjtHanlder = (val) => {
		dispatch(line_pair_det_Obj(val));
	};
	const linePairRecognition = (val) => {
		dispatch(line_pair_rec(val));
	};
	const linePairIdentification = (val) => {
		dispatch(line_pair_ident(val));
	};
	const targetSizeNatoWidth = (val) => {
		dispatch(target_size_nato_width(val));
	};
	const targetSizeNatoHeight = (val) => {
		dispatch(target_size_nato_height(val));
	};
	const targetSizeHumanWidth = (val) => {
		dispatch(target_size_human_width(val));
	};
	const targetSizeHumanHeight = (val) => {
		dispatch(target_size_human_height(val));
	};
	const targetSizeObjWidth = (val) => {
		dispatch(target_size_obj_width(val));
	};
	const targetSizeObjHeight = (val) => {
		dispatch(target_size_obj_height(val));
	};
	const detectorSizeWidth = (val) => {
		dispatch(detector_size_width(val));
	};
	const detectorSizeHeight = (val) => {
		dispatch(detector_size_height(val));
	};
	const detectorPitch = (val) => {
		dispatch(detector_pitch(val));
	};

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
						handler={linePairDetHanlder}
					/>
					<TextInputController
						text='Detection (Obj.)'
						image={GeneralImages.linePairSrc}
						maxLength={4}
						defaultValue={{ first: settingsData.linepairDetObj }}
						handler={linePairDeObjtHanlder}
					/>
					<TextInputController
						text='Recognition'
						image={GeneralImages.linePairSrc}
						maxLength={4}
						defaultValue={{ first: settingsData.linePairRec }}
						handler={linePairRecognition}
					/>
					<TextInputController
						text='identification'
						image={GeneralImages.linePairSrc}
						maxLength={4}
						defaultValue={{ first: settingsData.linePairIdent }}
						handler={linePairIdentification}
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
						handler={targetSizeNatoWidth}
						secondHandler={targetSizeNatoHeight}
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
						handler={targetSizeHumanWidth}
						secondHandler={targetSizeHumanHeight}
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
						handler={targetSizeObjWidth}
						secondHandler={targetSizeObjHeight}
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
						handler={detectorSizeWidth}
						secondHandler={detectorSizeHeight}
					/>
					<TextInputController
						text='Detector Pitch (mic)'
						image={GeneralImages.pixelSizeSrc}
						maxLength={2}
						defaultValue={{ first: detectorData.detectorPitch }}
						handler={detectorPitch}
					/>
				</View>
				<View style={styles.buttonContainer}>
					<Button
						color={Platform.OS === "android" ? Colors.Primary : "#007AFF"}
						title='Restore to Default Settings'
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
