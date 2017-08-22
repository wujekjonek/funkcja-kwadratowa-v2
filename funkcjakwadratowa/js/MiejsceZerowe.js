// test GIT sdfhsfhsfhsfhsfhhhhzgddgadgadgadgadgadgadgadgadgadgag
// test GIT sdfhsfhsfhsfhsfhhhhzgddgadgadgadgadgadgadgadgadgadgag
// test GIT sdfhsfhsfhsfhsfhhhhzgddgadgadgadgadgadgadgadgadgadgag
// test GIT sdfhsfhsfhsfhsfhhhhzgddgadgadgadgadgadgadgadgadgadgag
// test GIT sdfhsfhsfhsfhsfhhhhzgddgadgadgadgadgadgadgadgadgadgag
// test GIT sdfhsfhsfhsfhsfhhhhzgddgadgadgadgadgadgadgadgadgadgag
// test GIT sdfhsfhsfhsfhsfhhhhzgddgadgadgadgadgadgadgadgadgadgag
// test GIT sdfhsfhsfhsfhsfhhhhzgddgadgadgadgadgadgadgadgadgadgag
// test GIT sdfhsfhsfhsfhsfhhhhzgddgadgadgadgadgadgadgadgadgadgag
// test GIT sdfhsfhsfhsfhsfhhhhzgddgadgadgadgadgadgadgadgadgadgag
// test GIT sdfhsfhsfhsfhsfhhhhzgddgadgadgadgadgadgadgadgadgadgag
// test GIT sdfhsfhsfhsfhsfhhhhzgddgadgadgadgadgadgadgadgadgadgag
// test GIT sdfhsfhsfhsfhsfhhhhzgddgadgadgadgadgadgadgadgadgadgag
var MiejsceZerowe = (function () {
    // KONSTRUKTOR
    function MiejsceZerowe(a, b, c, delta) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.delta = delta;
    }
    // METODY
    MiejsceZerowe.prototype.obliczMiejsceZerowe00 = function () {
        var miejsceZerowe00 = (-this.b / 2 * this.a);
        console.log("miejsceZerowe00: " + miejsceZerowe00);
        return miejsceZerowe00;
    };
    MiejsceZerowe.prototype.obliczMiejsceZerowe01 = function () {
        var miejsceZerowe01 = (-b - (Math.sqrt(delta))) / (2 * a);
        console.log("miejsceZerowe01: " + miejsceZerowe01);
        return miejsceZerowe01;
    };
    MiejsceZerowe.prototype.obliczMiejsceZerowe02 = function () {
        var miejsceZerowe02 = (-b + (Math.sqrt(delta))) / (2 * a);
        console.log("miejsceZerowe02: " + miejsceZerowe02);
        return miejsceZerowe02;
    };
    return MiejsceZerowe;
}());
