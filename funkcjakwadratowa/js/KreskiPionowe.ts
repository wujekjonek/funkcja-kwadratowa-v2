class KreskiPionowe {
    public static rysuj(): void {

        ctx.beginPath();

        for (let i = 20; i < 800; i = i + 20) {

            ctx.moveTo(i, 295);
            ctx.lineTo(i, 305);
        }
        ctx.strokeStyle = "blue";
        ctx.stroke();
    }
}






