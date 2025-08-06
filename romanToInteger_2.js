/*
* Roman to Integer
*/

var romanToInteger = function(s) {
    const romanMap = new Map([
        ['M', 1000],
        ['CM', 900], ['D', 500], ['CD', 400], ['C', 100],
        ['XC', 90], ['L', 50], ['XL', 40], ['X', 10],
        ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]
    ]);
    let ans = 0;
    let num = 0;

    while (num < s.length){
        for (const [key, value] of romanMap) {
            let len = key.length;
            let tmp = s.slice(num,num+len);

            if (tmp === key) {
                if (['M','C','X','I'].includes(key)) {
                    let i = 1;
                    while(i<3 && tmp === s.slice(num+i,num+i+1)) {
                        ans += value;
                        i ++;
                    }
                }
                ans += value;
                num += len;
            }
        }
    return ans;
    }
}

console.log(romanToInteger("III"));
console.log(romanToInteger("LVIII"));
console.log(romanToInteger("MCMXCIV"));