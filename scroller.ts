let delay = 0
let counter = 0
let status = 0
let score = 0
input.onButtonPressed(Button.AB, function () {
    if (status == 1) {
        center = 2
        sprite = 2
        score = 0
        counter = 0
        playfield = [17, 19, 17, 19, 17]
        status = 0
    }
})
function drawSprite() {
    led.plotBrightness(sprite, 4, 255)
}
function drawPlayfield() {
    basic.clearScreen()
    for (let y = 0; y <= 5 - 1; y++) {
        for (let x = 0; x <= 5 - 1; x++) {
            if ((playfield[y] & (1 << x)) > 0) {
                led.plotBrightness(x, y, 64)
            }
        }
    }
}
input.onButtonPressed(Button.A, function () {
    if (sprite > 0) {
        sprite += -1
    }
})
input.onButtonPressed(Button.B, function () {
    if (sprite < 4) {
        sprite += 1
    }
})
let playfield: number[] = []
let sprite = 0
let center = 0
delay = 1000
playfield = [17, 19, 17, 19, 17]
center = 2
sprite = 2
status = 0
led.setDisplayMode(DisplayMode.Greyscale)
basic.forever(function () {
    if (status == 0) {
        playfield[4] = playfield[3]
        playfield[3] = playfield[2]
        playfield[2] = playfield[1]
        playfield[1] = playfield[0]
        center = center + Math.randomRange(-1, 1)
        if (center < 0) {
            center = 0
        }
        if (center > 5) {
            center = 4
        }
        playfield[0] = 31 & (~(1 << center)) & (~(1 << (center - 1))) & (~(1 << (center + 1)))
        if ((playfield[4] & (1 << sprite)) > 0) {
            status = 1
        }
        score = score + 1
        counter = counter + 1
        if (counter > 100) {
            counter = 0
            delay = delay - 10
            if (delay < 400) {
                delay = 400
            }
        }
        drawPlayfield()
        drawSprite()
    }
    if (status == 1) {
        basic.showString("Game over! Score:" + score)
    }
    basic.pause(delay)
})
