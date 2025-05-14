PlanetX_AILens.setASRLearn()
basic.forever(function () {
    if (PlanetX_Basic.gasValue(PlanetX_Basic.GasList.Alcohol, PlanetX_Basic.AnalogRJPin.J1) > 0.08) {
        music.play(music.createSoundExpression(WaveShape.Triangle, 2295, 3388, 255, 255, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
})
