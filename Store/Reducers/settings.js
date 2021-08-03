import * as settingsActions from "../Actions/settings";
const initialState = {
	nato: {
		width: 2.3,
		height: 2.3,
	},
	human: {
		width: 0.5,
		height: 1.7,
	},
	obj: {
		width: 0.5,
		height: 0.5,
	},
	detectorSize: {
		width: 640,
		height: 480,
	},
	linePairDet: 2.0,
	linepairDetObj: 1.2,
	linePairRec: 6.0,
	linePairIdent: 10.0,
};

const settingsReducer = (state = initialState, action) => {
	switch (action.type) {
		case settingsActions.LINE_PAIR_REC:
			return { ...state, linePairRec: action.linePairRec };
		case settingsActions.LINE_PAIR_DET:
			return { ...state, linePairDet: action.linePairDet };
		case settingsActions.LINE_PAIR_DET_OBJ:
			return { ...state, linepairDetObj: action.linePairDetObj };
		case settingsActions.LINE_PAIR_IDENT:
			return { ...state, linePairIdent: action.linePairIdent };

		case settingsActions.DETECTOR_SIZE_HEIGHT:
			const detectorSizeHeight = { ...state.detectorSize };

			detectorSizeHeight.height = action.detectorSizeHeight;

			return { ...state, detectorSize: detectorSizeHeight };

		case settingsActions.DETECTOR_SIZE_WIDTH:
			const detectorSizeWidth = { ...state.detectorSize };

			detectorSizeWidth.width = action.detectorSizeWidth;

			return { ...state, detectorSize: detectorSizeWidth };

		case settingsActions.TARGET_SIZE_NATO_HEIGHT:
			const tsNatoHeight = { ...state.nato };

			tsNatoHeight.height = action.targetSizeHeight;

			return { ...state, nato: tsNatoHeight };

		case settingsActions.TARGET_SIZE_NATO_WIDTH:
			const tsNatoWidth = { ...state.nato };

			tsNatoWidth.width = action.targetSizeWidth;

			return { ...state, nato: tsNatoWidth };

		case settingsActions.TARGET_SIZE_HUMAN_HEIGHT:
			const tsHumanHeight = { ...state.human };

			tsHumanHeight.height = action.targetSizeHeight;

			return { ...state, human: tsHumanHeight };

		case settingsActions.TARGET_SIZE_HUMAN_WIDTH:
			const tsHumanWidth = { ...state.human };

			tsHumanWidth.width = action.targetSizeWidth;

			return { ...state, human: tsHumanWidth };

		case settingsActions.TARGET_SIZE_OBJ_HEIGHT:
			const tsObjHeight = { ...state.obj };

			tsObjHeight.height = action.targetSizeHeight;

			return { ...state, obj: tsObjHeight };

		case settingsActions.TARGET_SIZE_OBJ_WIDTH:
			const tsObjWidth = { ...state.obj };

			tsObjWidth.width = action.targetSizeWidth;

			return { ...state, obj: tsObjWidth };
		case settingsActions.RESTORE_DEFAULT_SETTINGS:
			return initialState;

		default:
			return state;
	}
};
//TODO fix detector pitch since it is shared among two stores

export default settingsReducer;
