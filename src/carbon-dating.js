import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;


export default function dateSample(sampleActivity) {
    let activity = Number(sampleActivity)
    if (typeof sampleActivity == 'string' && activity <= MODERN_ACTIVITY &&
        activity > 0) {
        return Math.ceil((Math.log(MODERN_ACTIVITY / activity) * HALF_LIFE_PERIOD) / Math.LN2)
    } else {
        return false
    }
}