/**
 * 将两个数字相加
 * @param {number} a - 第一个数字
 * @param {number} b - 第二个数字
 * @returns {number} 两个数字的和
 */
function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('参数必须是数字类型');
    }
    return a + b;
}

/**
 * 将两个数字相减
 * @param {number} a - 被减数
 * @param {number} b - 减数
 * @returns {number} 两个数字的差
 */
function subtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('参数必须是数字类型');
    }
    return a - b;
}

const house = {
    id: 1,
    address: '123 Main St',
    price: 250000,
};

module.exports = { add, subtract, house };