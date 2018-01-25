let timer = 0
let notes: number[] = []
let number = 0
let index = 0
let noteon = false
let noteval = 0
let tempo = 0
let patternlength = 0
let state = 0
let currnote = 0
input.onButtonPressed(Button.AB, () => {
    state += 1
    if (state > 4) {
        state = 0
    } else if (state == 2) {
        index = 0
    }
})
function setLength()  {
    patternlength = 1 + 16 * (input.acceleration(Dimension.Y) + 1024) / 2048
    if (patternlength < 1) {
        patternlength = 1
    } else if (patternlength > 16) {
        patternlength = 16
    }
    number = patternlength
    showNumber()
}
function runSequencer()  {
    basic.showLeds(`
        . . # # .
        . . # . #
        . . # . .
        # # # . .
        # # # . .
        `)
    music.playTone(notes[index], music.beat(BeatFraction.Sixteenth))
    index += 1
    if (index > patternlength - 1) {
        index = 0
    }
}
function setTempo()  {
    tempo = 20 + 100 * (input.acceleration(Dimension.Y) + 1024) / 2048
    basic.showString("T=" + tempo)
    music.setTempo(tempo)
}
function setNote()  {
    noteval = input.acceleration(Dimension.Y) + 1024
    music.ringTone(noteval)
    notes[currnote] = noteval
    number = currnote
    showNumber()
}
input.onButtonPressed(Button.B, () => {
    if (state == 2) {
        currnote += 1
        if (currnote >= patternlength) {
            currnote = 0
        }
    }
})
function showNumber()  {
    if (number == 10) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # . #
            # . # . #
            # . # # #
            `)
    } else if (number == 11) {
        basic.showLeds(`
            # . . # .
            # . . # .
            # . . # .
            # . . # .
            # . . # .
            `)
    } else if (number == 12) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . # # #
            # . # . .
            # . # # #
            `)
    } else if (number == 13) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . # # #
            # . . . #
            # . # # #
            `)
    } else if (number == 14) {
        basic.showLeds(`
            # . # . #
            # . # . #
            # . # # #
            # . . . #
            # . . . #
            `)
    } else if (number == 15) {
        basic.showLeds(`
            # . # # #
            # . # . .
            # . # # #
            # . . . #
            # . # # #
            `)
    } else if (number == 16) {
        basic.showLeds(`
            # . # # #
            # . # . .
            # . # # #
            # . # . #
            # . # # #
            `)
    } else if (number == 17) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            `)
    } else if (number == 18) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # # #
            # . # . #
            # . # # #
            `)
    } else if (number == 19) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # # #
            # . . . #
            # . # # #
            `)
    } else {
        basic.showNumber(number)
    }
}
currnote = 0
noteon = false
state = 0
patternlength = 16
notes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
tempo = 80
timer = input.runningTime()
basic.forever(() => {
    if (state == 0) {
        setTempo()
    } else if (state == 1) {
        setLength()
    } else if (state == 2) {
        setNote()
    } else if (state == 3) {
        runSequencer()
    } else if (state == 4) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else {
    	
    }
})
