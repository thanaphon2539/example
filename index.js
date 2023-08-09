const example_test = (str) => {
    if (!str || str.length === 0) throw new Error(`data not found`);
    for (let length = str.length; length > 0; length--) {
        // console.log('length >>>', length)
        // console.log('-----------------------------------------')
        for (let start = 0; start <= str.length - length; start++) {
            let left = start
            let right = ((start + length) - 1)
            if (check(left, right, str)) {
                // console.log('start >>>', start)
                // console.log('len >>>', start + length)
                return str.substring(start, start + length);
            }
        }
    }
}

const check = (left, right, str) => {
    // console.log('left >>>', left)
    // console.log('right >>>', right)
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

const str1 = 'babad'
const str2 = 'cbbd'
console.log(`
    Example 1 
    Input: str = ${str1}
    Output: [ ${example_test(str1)} ]
    Explanation: "aba" is also a valid answer.
`)

console.log(`
    Example 2
    Input: str = ${str2}
    Output: [ ${example_test(str2)} ]
`)