import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
    constructor(type) {
        this.revers = false

        if (!type) {
            this.revers = true
        }
    }

    keyGen(message, key) {
        if (message.length == key.length) {
            return key
        } else {
            let count = Math.round(message.length / key.length)
            return key.repeat(count).slice(0, message.length)
        }
    }

    encrypt(message, key) {
        if (!message || !key) {
            throw new Error('Incorrect arguments!')
        }
        const start = 65
        const end = 90
        const fullKey = this.keyGen(message, key).toUpperCase()

        let messageUp = message.toUpperCase()
        let cipher = []

        for (let i = 0, j = 0; i < messageUp.length; i++) {
            let letter = messageUp.charCodeAt(i)

            if (letter >= start && letter <= end) {
                cipher.push(String.fromCharCode(start + (((letter - start) + (fullKey.charCodeAt(j) - start)) % 26)))
                j++
            } else {
                cipher.push(messageUp[i])
            }
        }

        return this.reversed ? cipher.reverse().join('') : cipher.join('')
    }

    decrypt(message, key) {
        if (!message || !key) {
            throw new Error('Incorrect arguments!')
        }
        const fullKey = this.keyGen(message, key).toUpperCase()
        const start = 65
        const end = 90
        let messageUp = message.toUpperCase()
        let cipher = []
        for (let i = 0, j = 0; i < messageUp.length; i++) {
            let letter = messageUp.charCodeAt(i)

            if (letter >= start && letter <= end) {

                cipher.push(String.fromCharCode(start + (((letter - start) + (fullKey.charCodeAt(j) - start)) % 26)))
                j++
            } else {
                cipher.push(messageUp[i])
            }
        }

        return this.reversed ? cipher.reverse().join('') : cipher.join('')
    }
}