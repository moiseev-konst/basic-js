import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {

    calculateDepth(arr) {
        let max = 1
        arr.forEach((el) => {
            if (Array.isArray(el)) {
                let elDepth = this.calculateDepth(el) + 1
                max = Math.max(max, elDepth)
            }
        })
        return max
    }
}