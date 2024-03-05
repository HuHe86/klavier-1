basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    if (input.pinIsPressed(TouchPin.P1)) {
        music.playTone(294, music.beat(BeatFraction.Whole))
    }
    if (input.pinIsPressed(TouchPin.P2)) {
        music.playTone(330, music.beat(BeatFraction.Whole))
    }
    if (input.pinIsPressed(TouchPin.P3)) {
        music.playTone(349, music.beat(BeatFraction.Whole))
    }
})
