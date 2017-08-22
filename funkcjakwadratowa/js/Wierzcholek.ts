class Wierzcholek {


    // POLA KLASY
    a: number;
    b: number;
    c: number;
    delta: number;


    // KONSTRUKTOR
    constructor(a: number, b: number, c: number, delta: number) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.delta = delta;
    }

    // METODY
    obliczWierzcholekX() {
        let wierzcholekX = -this.b / (2 * this.a);
        console.log("wierzcholekX: " + wierzcholekX);
        return wierzcholekX;
    }

    obliczWierzcholekY() {
        let wierzcholekY = -this.delta / (4 * this.a);
        console.log("wierzcholekY: " + wierzcholekY);
        return wierzcholekY;
    }
}