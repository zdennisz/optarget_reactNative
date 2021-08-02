export const FOCAL_LENGTH = "FOCAL_LENGTH";
export const DETECTOR_PITCH = "DETECTOR_PITCH";
export const TARGET_DISTANCE = "TARGET_DISTANCE";
export const TARGET_SIZE_WIDTH = "TARGET_SIZE_WIDTH";
export const TARGET_SIZE_HEIGHT = "TARGET_SIZE_HEIGHT";

export const focal_length = (focalLength) => {
	let fl = parseInt(focalLength, 10);
	return { type: FOCAL_LENGTH, focalLength: fl };
};

export const detector_pitch = (detectorPitch) => {
	let dp = parseInt(detectorPitch, 10);
	return { type: DETECTOR_PITCH, detectorPitch: dp };
};

export const target_distance = (targetDistance) => {
	let td = parseInt(targetDistance, 10);
	return { type: TARGET_DISTANCE, targetDistance: td };
};

export const target_sizeWidth = (targetSize) => {
	let ts = parseInt(targetSize, 10);
	return { type: TARGET_SIZE_WIDTH, targetSizeWidth: ts };
};
export const target_sizeHeight = (targetSize) => {
	let ts = parseInt(targetSize, 10);
	return { type: TARGET_SIZE_HEIGHT, targetSizeHeight: ts };
};
