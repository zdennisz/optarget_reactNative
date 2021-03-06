import {
	Button,
	StyleSheet,
	View,
	ScrollView,
	KeyboardAvoidingView,
	Alert,
} from "react-native";
import React, { useState } from "react";
import TextInputController from "../Component/TextInputController";
import { GeneralImages } from "../Constants/Images";
import { focal_length, detector_pitch } from "../Store/Actions/detectorSize";
import { useSelector, useDispatch } from "react-redux";

import { Nato, Human, Obj } from "../Constants/TargetSizes";
import DRITable from "../Component/DRITable";

const DRICalculator = (props) => {
	const dispatch = useDispatch();
	const [isValid, setisValid] = useState();
	const [fl, setFl] = useState(false);
	const [detPitch, setDetPitch] = useState(true);
	let TableComponent;
	const data = useSelector((state) => state.detectorSize);
	const defaultSettings = useSelector((state) => state.settings);

	const defVal = { first: data.detectorPitch };

	const focalLengthHandler = (val) => {
		dispatch(focal_length(val));
		if (val != "") {
			setFl(true);
		} else {
			setFl(false);
		}
	};

	const detectorPitchHandler = (val) => {
		dispatch(detector_pitch(val));
		if (val != "") {
			setDetPitch(true);
		} else {
			setDetPitch(false);
		}
	};

	const calculateDRITable = (data) => {
		let result = {
			nato: {
				det: 0,
				rec: 0,
				ident: 0,
			},
			human: {
				det: 0,
				rec: 0,
				ident: 0,
			},
			obj: {
				det: 0,
				rec: 0,
			},
		};
		//det
		//nato,human,obj
		calcDetection(result, data);

		//nato, human,obj
		//rec
		calcRecognition(result, data);

		//idnet
		//nato,human,obj
		calcIdentification(result, data);

		return result;
	};

	const calcDetection = (res, data) => {
		res.nato.det = calcTarget(
			data.detectorPitch,
			data.focalLength,
			Nato,
			defaultSettings.linePairDet
		);

		res.human.det = calcTarget(
			data.detectorPitch,
			data.focalLength,
			Human,
			defaultSettings.linePairDet
		);

		res.obj.det = calcTarget(
			data.detectorPitch,
			data.focalLength,
			Obj,
			defaultSettings.linePairDetObj
		);
		res.nato.det = res.nato.det.toFixed(1);
		res.human.det = res.human.det.toFixed(1);
		res.obj.det = res.obj.det.toFixed(1);
	};

	const calcRecognition = (res, data) => {
		//nato
		res.nato.rec = calcTarget(
			data.detectorPitch,
			data.focalLength,
			Nato,
			defaultSettings.linePairRec
		);

		//human
		res.human.rec = calcTarget(
			data.detectorPitch,
			data.focalLength,
			Human,
			defaultSettings.linePairRec
		);
		//obj
		res.obj.rec = calcTarget(
			data.detectorPitch,
			data.focalLength,
			Obj,
			defaultSettings.linePairRec
		);

		res.nato.rec = res.nato.rec.toFixed(1);
		res.human.rec = res.human.rec.toFixed(1);
		res.obj.rec = res.obj.rec.toFixed(1);
	};

	const calcIdentification = (res, data) => {
		res.nato.ident = calcTarget(
			data.detectorPitch,
			data.focalLength,
			Nato,
			defaultSettings.linePairIdent
		);

		res.human.ident = calcTarget(
			data.detectorPitch,
			data.focalLength,
			Human,
			defaultSettings.linePairIdent
		);
		res.nato.ident = res.nato.ident.toFixed(1);
		res.human.ident = res.human.ident.toFixed(1);
	};

	const calcTarget = (sp, fl, ts, lp) => {
		return (
			(fl / ((lp * sp) / 1000000)) * (Math.sqrt(ts.width * ts.height) / 1000)
		);
	};
	const checkIfValidHandler = () => {
		if (fl && detPitch) {
			setisValid((state) => !state);
		} else {
			Alert.alert("Missing Data", "Please fill all the fields !");
			setisValid((state) => !state);
		}
	};

	if (isValid) {
		const result = calculateDRITable(data);
		TableComponent = <DRITable inputData={result} />;
	} else {
		TableComponent = <View></View>;
	}

	return (
		<ScrollView>
			<KeyboardAvoidingView
				behavior={Platform.OS === "android" ? "padding" : "position"}
			>
				<View style={styles.container}>
					<View style={styles.inputContainer}>
						<TextInputController
							image={GeneralImages.focalLengthSrc}
							text='Focal Length (mm): '
							maxLength={2}
							handler={focalLengthHandler}
						/>
						<TextInputController
							image={GeneralImages.pixelSizeSrc}
							text='Detector Pitch (mic):  '
							maxLength={2}
							handler={detectorPitchHandler}
							defaultValue={defVal}
						/>
					</View>
					<View style={styles.btnContainer}>
						<Button title='Calculate' onPress={checkIfValidHandler}></Button>
					</View>
					<View style={styles.tableContainer}>{TableComponent}</View>
				</View>
			</KeyboardAvoidingView>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-between",
		alignItems: "center",
	},
	inputContainer: {
		flex: 1,
		width: "100%",
		minHeight: 150,
		justifyContent: "center",
		alignItems: "center",
	},
	tableContainer: {
		flex: 1,
		width: "100%",
		minHeight: 50,
	},
	btnContainer: {
		flex: 1,
		width: "100%",
		flexDirection: "row-reverse",
		justifyContent: "flex-start",
		paddingHorizontal: 15,
		paddingVertical: 25,
	},
});

export default DRICalculator;
