var Wierzcholek = (function () {
    // KONSTRUKTOR
    function Wierzcholek(a, b, c, delta) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.delta = delta;
    }
    // METODY
    Wierzcholek.prototype.obliczWierzcholekX = function () {
        var wierzcholekX = -this.b / (2 * this.a);
        console.log("wierzcholekX: " + wierzcholekX);
        return wierzcholekX;
    };
    Wierzcholek.prototype.obliczWierzcholekY = function () {
        var wierzcholekY = -this.delta / (4 * this.a);
        console.log("wierzcholekY: " + wierzcholekY);
        return wierzcholekY;
    };
    return Wierzcholek;
}());
