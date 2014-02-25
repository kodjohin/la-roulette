var Chip = (function () {
    var value;

    function Chip(value){
        Object.defineProperty(this, 'value', {
            get:function () {
                return value;
            }
        })
    }
    return Chip;
}())
