import { View, StyleSheet, Platform, StatusBar } from "react-native";
import React, { useEffect } from "react";
import HomeScreenButton from "../Component/HomeScreenButton";
import { Images } from "../Constants/Images";
import { useState } from "react";
import PopupScreen from "../Component/PopupScreen/PopupScreen";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../Component/HeaderButton";

const HomeScreen = (props) => {
	const { navigation } = props;

	const [modalVisible, setModalVisible] = useState(false);

	const detectorSizeHandler = () => {
		navigation.navigate("DetectSize");
	};
	const driCalcHandler = () => {
		navigation.navigate("DriCalc");
	};

	const fovCalcHandler = () => {
		navigation.navigate("FieldOfView");
	};

	const settingsHandler = () => {
		navigation.navigate("Settings");
	};
	const requiredLensHandler = () => {
		setModalVisible((modalVisible) => !modalVisible);
	};
	const operateModalHandler = (value) => {
		switch (value) {
			case "close":
				setModalVisible((modalVisible) => !modalVisible);
				break;
			case "angle":
				setModalVisible((modalVisible) => !modalVisible);
				navigation.navigate("LensAngleInput");
				break;
			case "target":
				setModalVisible((modalVisible) => !modalVisible);
				navigation.navigate("LensTargetInput");
				break;
		}
	};
	useEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<HeaderButtons HeaderButtonComponent={HeaderButton}>
					<Item
						title='Settings'
						iconName={
							Platform.OS === "andorid" ? "md-settings" : "ios-settings"
						}
						onPress={settingsHandler}
					/>
				</HeaderButtons>
			),
		});
	}, []);

	return (
		<View style={styles.container}>
			<StatusBar animated={true} backgroundColor='#61dafb' />
			{modalVisible && (
				<PopupScreen handler={operateModalHandler} visibility={modalVisible} />
			)}
			<View style={styles.row}>
				<HomeScreenButton
					title='Required Lens Calculator'
					img={Images.requiredLensSrc}
					navigate={requiredLensHandler}
				/>
				<HomeScreenButton
					title='Detector Size Calculator'
					img={Images.dimensionsSrc}
					navigate={detectorSizeHandler}
				/>
			</View>
			<View style={styles.row}>
				<HomeScreenButton
					title='Field Of View Calculator'
					img={Images.fieldOfViewSrc}
					navigate={fovCalcHandler}
				/>
				<HomeScreenButton
					title='DRI Calculator'
					img={Images.driCalculatorSrc}
					navigate={driCalcHandler}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	row: {
		flexDirection: "row",
		flex: 1,
	},
});

export default HomeScreen;
