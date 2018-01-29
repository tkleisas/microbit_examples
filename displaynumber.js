let item = 0

input.onButtonPressed(Button.A, () => {
    item += 1
    shortDisplayNumber(item)
})
input.onButtonPressed(Button.B, () => {
    item += -1
    shortDisplayNumber(item)

})
input.onButtonPressed(Button.AB, () => {

    basic.showNumber(item)
    shortDisplayNumber(item)

})
item = 0

function plotVLine(x: number, y: number) {
    for (let i = 0; i <= 4; i++) {
        if (i >= y) {
            led.unplot(x, 4 - i);
        }
        else {
            led.plot(x, 4 - i);

        }
    }
}
function shortDisplayNumber(n: number) {
    if (n >= 0 && n <= 599) {
        let n2 = n / 100
        let n1 = (n - n2 * 100) / 10;
        let n0 = (n - n2 * 100 - n1 * 10);
        if (n0 > 5) {
            plotVLine(4, 5);
            plotVLine(3, n0 - 5);
        }
        else {
            plotVLine(4, n0);
            plotVLine(3, 0);
        }
        if (n1 > 5) {
            plotVLine(2, 5);
            plotVLine(1, n1 - 5);
        }
        else {
            plotVLine(2, n1);
            plotVLine(1, 0);
        }
        plotVLine(0, n2);


    }
}
basic.forever(() => {

})
