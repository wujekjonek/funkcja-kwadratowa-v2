var Delta = (function () {
    // KONSTRUKTOR
    function Delta(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    // METODY
    Delta.prototype.obliczDelte = function () {
        var delta = (Math.pow(this.b, 2)) - (4 * this.a * this.c);
        console.log("delta z klasy: " + delta);
        document.getElementById("delta").innerHTML = "delta wynosi: " + delta;
        return delta;
    };
    return Delta;
}());
