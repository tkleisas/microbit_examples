let message = ""
let alphabet = ""
let current = 0
radio.onDataPacketReceived( ({ receivedString }) =>  {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.A, () => {
    current += -1
    if (current < 0) {
        current = alphabet.length - 1
    }
    basic.showString(alphabet.charAt(current))
})
input.onButtonPressed(Button.B, () => {
    current += 1
    if (current > alphabet.length) {
        current = 0
    }
    basic.showString(alphabet.charAt(current))
})
input.onButtonPressed(Button.AB, () => {
    if (alphabet.substr(current, 1).compare(">") == 0) {
        basic.showString(message)
        radio.sendString(message)
        message = ""
        basic.showString(alphabet.charAt(current))
    } else {
        message = "" + message + alphabet.substr(current, 1)
    }
})
radio.setGroup(1)
alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ >"
current = 0
message = ""
basic.showString(alphabet.charAt(current))
basic.forever(() => {
	
})
