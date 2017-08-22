// var canvas = document.getElementById("myCanvas");
// var ctx = canvas.getContext("2d");
var Punkt = (function () {
    // KONSTRUKTOR
    function Punkt(x, y, opis) {
        if (opis === void 0) { opis = null; }
        this.x = x;
        this.y = y;
        if (opis) {
            this.opis = opis;
        }
        else {
            this.opis = x.toString();
        }
    }
    // METODY
    Punkt.prototype.rysujpunkt = function () {
        ctx.beginPath();
        ctx.arc((400 + (this.x * 20)), (300 - (this.y * 20)), 4, 0, 10);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.font = "10px Arial";
        ctx.fillStyle = "black";
        ctx.fillText(this.opis, (395 + (this.x * 20)), (320 - (this.y * 20)));
        console.log("wspolrzedne" + " " + this.x + " " + this.y + " punktu: " + this.opis);
    };
    return Punkt;
}());
