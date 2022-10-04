input.onButtonPressed(Button.A, function () {
    if (_var == 0) {
        basic.showIcon(IconNames.SmallDiamond)
    } else if (_var == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else {
        basic.showIcon(IconNames.Square)
    }
})
let _var = 0
_var = randint(0, 2)
basic.forever(function () {
	
})
