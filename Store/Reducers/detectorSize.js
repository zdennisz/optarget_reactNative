import { FOCAL_LENGTH, DETECTOR_PITCH, TARGET_DISTANCE, TARGET_SIZE_WIDTH, TARGET_SIZE_HEIGHT } from "../Actions/detectorSize";

const initialState = {
  focalLength: 0,
  detectorPitch: 0,
  targetDistance: 0,
  targetSize: { width: 0, height: 0 },
};

const detectorSizeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOCAL_LENGTH:
      return { ...state, focalLength: action.focalLength };
    case DETECTOR_PITCH:
      return { ...state, detectorPitch: action.detectorPitch };
    case TARGET_DISTANCE:
      return { ...state, targetDistance: action.targetDistance };
    case TARGET_SIZE_WIDTH:
      const oldHeight = state.targetSize.height;
      const newHeight = {
        width: action.targetSizeWidth,
        height: oldHeight,
      };
      return { ...state, targetSize: newHeight };
    case TARGET_SIZE_HEIGHT:
      const oldWidth = state.targetSize.width;
      const newWidth = {
        width: oldWidth,
        height: action.targetSizeHeight,
      };
      return { ...state, targetSize: newWidth };

    default:
      return state;
  }
};

export default detectorSizeReducer;
