class Delta {

    // POLA KLASY
    a: number;
    b: number;
    c: number;

    // KONSTRUKTOR
    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    // METODY
    obliczDelte() {
        let delta = (Math.pow(this.b, 2)) - (4 * this.a * this.c);
        console.log("delta z klasy: " + delta);
        return delta;
    }


}