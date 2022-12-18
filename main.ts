input.onButtonPressed(Button.A, function () {
    speed1 += 1
    changeSpeed(1, speed1)
    OLED.writeNumNewLine(speed1)
})
function changeSpeed (fan: number, speed: number) {
    speed = speed * 100
    if (fan == 1) {
        pins.digitalWritePin(DigitalPin.P0, speed)
    } else if (fan == 2) {
        pins.digitalWritePin(DigitalPin.P1, speed)
    } else {
    	
    }
}
input.onButtonPressed(Button.B, function () {
    speed2 += 1
    changeSpeed(2, speed2)
    OLED.writeNumNewLine(speed2)
})
let speed = 0
let speed2 = 0
let speed1 = 0
OLED.init(128, 64)
bluetooth.startUartService()
speed1 = 0
speed2 = 0
pins.digitalWritePin(DigitalPin.P0, 0)
pins.digitalWritePin(DigitalPin.P1, 0)
loops.everyInterval(60000, function () {
	
})
basic.forever(function () {
    bluetooth.uartWriteString("Rhg")
})
