(function toThePowerOf (numberOfTimes, numToMultiplyBy, result) {
    for (var i = 0; i < numberOfTimes; i++) {
        result *= numToMultiplyBy;
    }
    console.log(result);
})(37, 2, 2);
