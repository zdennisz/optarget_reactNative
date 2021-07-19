export const FOCAL_LENGTH = "FOCAL_LENGTH";
export const DETECTOR_PITCH = "DETECTOR_PITCH";
export const TARGET_DISTANCE = "TARGET_DISTANCE";
export const TARGET_SIZE_WIDTH = "TARGET_SIZE_WIDTH";
export const TARGET_SIZE_HEIGHT = "TARGET_SIZE_HEIGHT";

export const focal_length = (focalLength) => {
  return { type: FOCAL_LENGTH, focalLength: focalLength };
};

export const detector_pitch = (detectorPitch) => {
  return { type: DETECTOR_PITCH, detectorPitch: detectorPitch };
};

export const target_distance = (targetDistance) => {
  return { type: TARGET_DISTANCE, targetDistance: targetDistance };
};

export const target_sizeWidth = (targetSize) => {
  return { type: TARGET_SIZE_WIDTH, targetSizeWidth: targetSize };
};
export const target_sizeHeight = (targetSize) => {
  return { type: TARGET_SIZE_HEIGHT, targetSizeHeight: targetSize };
};
