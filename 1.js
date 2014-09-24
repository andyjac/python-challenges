var numToMultiplyBy = 2;
var result = 2;

(function toThePowerOf () {
    for (var i = 0; i < 37; i++) {
        result = result * numToMultiplyBy;
    }
    console.log(result);
})();
