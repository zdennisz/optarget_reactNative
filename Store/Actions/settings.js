//line pair settings
export const LINE_PAIR_DET = "LINE_PAIR_DET";
export const LINE_PAIR_DET_OBJ = "LINE_PAIR_DET_OBJ";
export const LINE_PAIR_REC = "LINE_PAIR_REC";
export const LINE_PAIR_IDENT = "LINE_PAIR_IDENT";
//Target Size Nato
export const TARGET_SIZE_NATO_WIDTH = "TARGET_SIZE_NATO_WIDTH";
export const TARGET_SIZE_NATO_HEIGHT = "TARGET_SIZE_NATO_HEIGHT";
//Target Size Human
export const TARGET_SIZE_HUMAN_WIDTH = "TARGET_SIZE_HUMAN_WIDTH";
export const TARGET_SIZE_HUMAN_HEIGHT = "TARGET_SIZE_HUMAN_HEIGHT";
//Target Size Obj
export const TARGET_SIZE_OBJ_WIDTH = "TARGET_SIZE_OBJ_WIDTH";
export const TARGET_SIZE_OBJ_HEIGHT = "TARGET_SIZE_OBJ_HEIGHT";
//Detector Size
export const DETECTOR_SIZE_WIDTH = "DETECTOR_SIZE_WIDTH";
export const DETECTOR_SIZE_HEIGHT = "DETECTOR_SIZE_HEIGHT";
//Detector Pitch
export const DETECTOR_PITCH = "DETECTOR_PITCH";


//line pair actions
export const line_pair_det = (val) => {
    let v = parseInt(val, 10)
    return { type: LINE_PAIR_DET, linePairDet: v }
}

export const line_pair_det_Obj = (val) => {
    let v = parseInt(val, 10)
    return { type: LINE_PAIR_DET_OBJ, linePairDetObj: v }
}

export const line_pair_rec = (val) => {
    let v = parseInt(val, 10)
    return { type: LINE_PAIR_REC, linePairRec: v }
}

export const line_pair_ident = (val) => {
    let v = parseInt(val, 10)
    return { type: LINE_PAIR_IDENT, linePairIdent: v }
}

//Target Size actions
export const target_size_nato_width = (val) => {
    let v = parseInt(val, 10)
    return { type: TARGET_SIZE_NATO_WIDTH, targetSizeWidth: v }
}
export const target_size_nato_height = (val) => {
    let v = parseInt(val, 10)
    return { type: TARGET_SIZE_NATO_HEIGHT, targetSizeHeight: v }
}

export const target_size_human_width = (val) => {
    let v = parseInt(val, 10)
    return { type: TARGET_SIZE_HUMAN_WIDTH, targetSizeWidth: v }
}
export const target_size_human_height = (val) => {
    let v = parseInt(val, 10)
    return { type: TARGET_SIZE_HUMAN_HEIGHT, targetSizeHeight: v }
}

export const target_size_obj_width = (val) => {
    let v = parseInt(val, 10)
    return { type: TARGET_SIZE_OBJ_WIDTH, targetSizeWidth: v }
}
export const target_size_obj_height = (val) => {
    let v = parseInt(val, 10)
    return { type: TARGET_SIZE_OBJ_HEIGHT, targetSizeHeight: v }
}
//Detector Size Actions
export const detector_size_width = (val) => {
    let v = parseInt(val, 10)
    return { type: DETECTOR_SIZE_WIDTH, detectorSizeWidth: v }
}
export const detector_size_height = (val) => {
    let v = parseInt(val, 10)
    return { type: DETECTOR_SIZE_HEIGHT, detectorSizeHeight: v }
}
//Detector Pitch
export const detector_pitch = (val) => {
    let v = parseInt(val, 10)
    return { type: DETECTOR_PITCH, detectorPitch: v }
}