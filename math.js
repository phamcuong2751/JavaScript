var math = {
    add: function(a, b) {
        return a + b;
    },
    sum: function(array) {
        let tong = 0;
        for (let n of array) {
            tong += n;
        }
        return tong;
    },
    multi: function(a, b) {
        return a - b;
    }
};

module.exports = math;