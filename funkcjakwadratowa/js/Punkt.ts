// var canvas = document.getElementById("myCanvas");
// var ctx = canvas.getContext("2d");


class Punkt {

// POLA KLASY
    x: number;
    y: number;
    opis: string;
    ctx: string;

// KONSTRUKTOR
    constructor(x: number, y: number, opis: string) {
        this.x = x;
        this.y = y;
        this.opis = opis;
        // if(opis) {
        //     this.opis = opis;
        // }
        // else{
        //     this.opis = x.toString();
        // }

    }

// METODY
    rysujpunkt() {

        ctx.beginPath();
        ctx.arc((400 + (this.x * 20)), (300 - (this.y * 20)), 4, 0, 10);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.font = "10px Arial";
        ctx.fillStyle = "black";
        ctx.fillText(this.opis, (395 + (this.x * 20)), (320 - (this.y * 20)));
        console.log("wspolrzedne" + " " + this.x + " " + this.y + " punktu: " + this.opis);
    }

}