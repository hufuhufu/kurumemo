/**
 * @description Randomly picks one element from an array.
 * 
 * @param {string[]} arr
 * @returns {string}
 */
export function randomPickArray(arr) {
    const len = arr.length;
    const rand = Math.random();

    for (let i = 1; i < len; i++) {
        if (rand < i / len) {
            return arr[i - 1];
        }
    }

    return arr[len - 1];
}