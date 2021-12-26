controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    Very_strong_cat_hammer.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . c . . . . . . . . c . . . 
        . . c c c . . . . . . c c c . . 
        . c c c c c . . . . c c c c c . 
        . c c c c c c c c c c c c c c . 
        . c c f f c c c c c c f f c c . 
        . c c f f c c 3 3 c c f f c c . 
        . c c c c c c c c c c c c c c . 
        . c c c c c c c c c c c c c c . 
        . c c c c c c c c c c c c c c . 
        . c c c c c c c c c c c c c c . 
        . . . . . . c c c c . . . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . . c c c c . . . . . . 
        . . . . . . c c c c . . . . . . 
        `)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Very_strong_cat_hammer.setImage(img`
        ....................
        ....................
        .........ccc........
        .......ccccc........
        .......ccccc........
        ......ccfcccc.......
        .....ccccfcccc......
        .....ccccccccccccc..
        ......ccccc3cccccc..
        .......ccccccccccc..
        ......cccccccfccc...
        .....cccccccccfcc...
        ....ccccc.cccccc....
        ..cccccc...cccc.....
        ..ccccc.....cc......
        ...ccc..............
        ....................
        ....................
        ....................
        ....................
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        info.changeScoreBy(1)
        otherSprite.destroy(effects.fire, 500)
    }
})
let Random = 0
let Very_angry_cheese: Sprite = null
let Very_strong_cat_hammer: Sprite = null
info.startCountdown(30)
info.setScore(0)
Very_strong_cat_hammer = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . c . . . . . . . . c . . . 
    . . c c c . . . . . . c c c . . 
    . c c c c c . . . . c c c c c . 
    . c c c c c c c c c c c c c c . 
    . c c f f c c c c c c f f c c . 
    . c c f f c c 3 3 c c f f c c . 
    . c c c c c c c c c c c c c c . 
    . c c c c c c c c c c c c c c . 
    . c c c c c c c c c c c c c c . 
    . c c c c c c c c c c c c c c . 
    . . . . . . c c c c . . . . . . 
    . . . . . . c c c c . . . . . . 
    . . . . . . c c c c . . . . . . 
    . . . . . . c c c c . . . . . . 
    . . . . . . c c c c . . . . . . 
    `, SpriteKind.Player)
Very_strong_cat_hammer.z = 1
scene.setBackgroundColor(13)
tiles.setTilemap(tilemap`層級1`)
controller.moveSprite(Very_strong_cat_hammer)
let Hit = 0
game.onUpdateInterval(randint(200, 2000), function () {
    Very_angry_cheese = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 4 . . . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . f . . . 4 5 5 5 5 4 . . . . . 
        . f f . 4 5 5 5 5 5 4 4 f f . . 
        . . f f 5 5 5 5 5 5 5 f f . . . 
        . . 4 f 5 5 5 5 5 5 f f 4 . . . 
        . 4 4 5 5 5 5 5 5 5 4 4 4 4 . . 
        4 4 5 f f 4 4 4 4 4 f f 5 4 . . 
        4 4 4 f f 5 5 5 5 5 f f 5 4 . . 
        4 5 5 5 5 5 5 5 5 5 5 5 5 4 . . 
        4 5 5 5 5 5 5 5 5 5 5 5 5 4 . . 
        4 5 5 5 5 5 5 5 4 4 4 4 4 4 . . 
        4 5 4 4 4 4 4 4 4 . . . . . . . 
        4 4 4 . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Random = randint(1, 4)
    if (Random == 1) {
        Very_angry_cheese.setPosition(30, 25)
    } else if (Random == 2) {
        Very_angry_cheese.setPosition(130, 19)
    } else if (Random == 3) {
        Very_angry_cheese.setPosition(23, 97)
    } else if (Random == 4) {
        Very_angry_cheese.setPosition(138, 93)
    }
    Very_angry_cheese.lifespan = 1900
})
