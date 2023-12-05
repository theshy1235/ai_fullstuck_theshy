function add(a, b) {
    if (arguments.length !== 2) {
        throw new Error('传递的参数有误');
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('必须是整数');
    }
}