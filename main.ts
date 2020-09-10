servos.P1.setAngle(0)
let x = 0
basic.forever(function () {
    servos.P1.setAngle(x)
    x += 1
    basic.pause(100)
    if (x > 180) {
        x = 0
    }
})
