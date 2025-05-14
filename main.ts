PlanetX_AILens.setASRLearn()
basic.forever(function () {
    if (PlanetX_Basic.gasValue(PlanetX_Basic.GasList.Alcohol, PlanetX_Basic.AnalogRJPin.J1) > 0.08) {
        for (let index = 0; index < 9; index++) {
            music.play(music.createSoundExpression(WaveShape.Triangle, 2295, 3388, 255, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J1, true, 75)
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
        }
        if (false) {
            basic.showLeds(`
                . . . . .
                . . . . #
                . . . # .
                # . # . .
                . # . . .
                `)
            for (let index = 0; index < 9; index++) {
                music.play(music.stringPlayable("C5 - - - - - - - ", 120), music.PlaybackMode.UntilDone)
            }
        }
    }
})
