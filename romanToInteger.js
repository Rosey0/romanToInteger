/*
*
*/

var romanToInteger = function(s) {
    const romanMap = new Map([
        ['I', 1], ['V', 5],
        ['X', 10], ['L', 50],
        ['C', 100], ['D', 500],
        ['M', 1000]
    ]);
    let ans = 0;

    for (let i=0; i<s.length; i++) {
        let curr = romanMap.get(s[i]);
        let next = romanMap.get(s[i+1]) ?? 0;

        if (curr<next) {
            ans -= curr;
        }
        else {
            ans += curr;
        }
    }
    return ans;
}

console.log(romanToInteger("III"));
console.log(romanToInteger("LVIII"));
console.log(romanToInteger("MCMXCIV"));