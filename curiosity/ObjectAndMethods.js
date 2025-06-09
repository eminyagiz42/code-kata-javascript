var counter = (function() {
    var count = 0;

    function changeBy(val) {
        count += val;
    }

    return {
        increment: function() {
            changeBy(1);
        },
        decrement: function() {
            changeBy(-1);
        }, value: function () {
            return count;
        }
    };
})();


console.log(counter.value());
counter.increment()
counter.increment()
console.log(counter.value());
counter.decrement();
console.log(counter.value());
//counter.changeBy(2);
//console.log(counter.value());