import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
    function add() {
        return Array(options.additionRepeatTimes).fill(String(options.addition)).join(options.additionSeparator || "|")
    }
    return Array(options.repeatTimes).fill(String(options.addition) != 'undefined' ? String(str) + add() : String(str)).join(options.separator || '+')
}