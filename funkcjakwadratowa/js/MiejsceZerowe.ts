class MiejsceZerowe {

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
    obliczMiejsceZerowe00() {
        let miejsceZerowe00 = (-this.b / 2 * this.a);
        console.log("miejsceZerowe00: " + miejsceZerowe00);
        return miejsceZerowe00;
    }

    obliczMiejsceZerowe01() {
        let miejsceZerowe01 = (-b - (Math.sqrt(delta))) / (2 * a);
        console.log("miejsceZerowe01: " + miejsceZerowe01);
        return miejsceZerowe01;
    }

    obliczMiejsceZerowe02() {
        let miejsceZerowe02 = (-b + (Math.sqrt(delta))) / (2 * a);
        console.log("miejsceZerowe02: " + miejsceZerowe02);
        return miejsceZerowe02;
    }


}