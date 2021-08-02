import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./Screens/HomeScreen";
import DRICalculator from "./Screens/DRICalculator";
import FieldOfView from "./Screens/FieldOfView";
import Settings from "./Screens/Settings";
import LensAngleInput from "./Screens/LensAngleInput";
import LenstargetInput from "./Screens/LensTargetInput";
import DetectSize from "./Screens/DetectSize";
import { createStore, combineReducers } from "redux";
import detectorSizeReducer from "./Store/Reducers/detectorSize";
import settingsReducer from "./Store/Reducers/settings";
import { Provider } from "react-redux";

const Stack = createStackNavigator();

const rootReducer = combineReducers({
	detectorSize: detectorSizeReducer,
	settings: settingsReducer,
});

const store = createStore(rootReducer);

export default function App() {
	return (
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name='Home'
						component={HomeScreen}
						options={{ title: "" }}
					/>
					<Stack.Screen
						name='DriCalc'
						component={DRICalculator}
						options={{ title: "DRI Calculator" }}
					/>
					<Stack.Screen
						name='FieldOfView'
						component={FieldOfView}
						options={{ title: "Field Of View" }}
					/>
					<Stack.Screen
						name='DetectSize'
						component={DetectSize}
						options={{ title: "Detection Size" }}
					/>
					<Stack.Screen
						name='LensAngleInput'
						component={LensAngleInput}
						options={{ title: "Angle Input" }}
					/>
					<Stack.Screen
						name='LensTargetInput'
						component={LenstargetInput}
						options={{ title: "Target Input" }}
					/>
					<Stack.Screen
						name='Settings'
						component={Settings}
						options={{ title: "Settings" }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}
