let count_base = 8;
let number = 273;

let result_rank = Math.floor(getBaseLog(count_base, number));
const result = new Array(result_rank).fill(0);

let remain = number;

function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
}

while (remain > 0) {
    let rank = Math.floor(getBaseLog(count_base, remain));
    let value = Math.floor(remain/(count_base**rank));
    result[rank] = value;
    remain -= value * count_base**rank;
}

console.log(result.reverse());