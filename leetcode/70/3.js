//  不用递归， for循环
//   自底向上
const climbStairs = function (n) {
    const f = [];
    f[1] = 1;
    f[2] = 2;
    for (let i = 3; i <= n; i++) {
        //递推公式
        f[i] = f[i - 1] + f[i - 2];

    }
}