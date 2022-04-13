controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vx == 0 && mySprite.vy == 0) {
        mySprite.ay = -64000
        mySprite.ax = 0
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    level += 1
    if (level == 2) {
        tiles.setCurrentTilemap(tilemap`level2`)
    } else {
        game.over(true)
    }
    startLevel()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vx == 0 && mySprite.vy == 0) {
        mySprite.ax = -64000
        mySprite.ay = 0
        mySprite.setImage(img`
            . 5 5 5 5 5 5 5 . . . 
            . 5 5 5 5 5 5 5 5 5 5 
            . 5 . 5 5 . 5 5 . . . 
            . 5 . 5 5 . 5 5 5 5 5 
            . 5 5 5 5 5 5 5 . . . 
            . 5 5 . . . 5 5 . 5 . 
            . . 5 5 5 5 5 . 5 5 5 
            . . . . . . . . 5 5 5 
            . . 5 5 5 5 5 5 . 5 5 
            . . 5 5 5 5 5 5 . 5 . 
            . . 5 5 . 5 5 5 . 5 . 
            `)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vx == 0 && mySprite.vy == 0) {
        mySprite.ax = 64000
        mySprite.ay = 0
        mySprite.setImage(img`
            . . . 5 5 5 5 5 5 5 . 
            5 5 5 5 5 5 5 5 5 5 . 
            . . . 5 5 . 5 5 . 5 . 
            5 5 5 5 5 . 5 5 . 5 . 
            . . . 5 5 5 5 5 5 5 . 
            . 5 . 5 5 . . . 5 5 . 
            5 5 5 . 5 5 5 5 5 . . 
            5 5 5 . . . . . . . . 
            5 5 . 5 5 5 5 5 5 . . 
            . 5 . 5 5 5 5 5 5 . . 
            . 5 . 5 5 5 . 5 5 . . 
            `)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vx == 0 && mySprite.vy == 0) {
        mySprite.ay = 64000
        mySprite.ax = 0
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
function startLevel () {
    for (let value of sprites.allOfKind(SpriteKind.Food)) {
        value.destroy()
    }
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile11`)
    for (let value of tiles.getTilesByType(assets.tile`myTile12`)) {
        mySprite2 = sprites.create(img`
            5 5 5 
            5 . 5 
            5 5 5 
            `, SpriteKind.Food)
        tiles.placeOnTile(mySprite2, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
let mySprite2: Sprite = null
let mySprite: Sprite = null
let level = 0
level = 1
mySprite = sprites.create(img`
    . . . 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 5 5 5 5 . 
    . . . 5 5 . 5 5 . 5 . 
    5 5 5 5 5 . 5 5 . 5 . 
    . . . 5 5 5 5 5 5 5 . 
    . 5 . 5 5 . . . 5 5 . 
    5 5 5 . 5 5 5 5 5 . . 
    5 5 5 . . . . . . . . 
    5 5 . 5 5 5 5 5 5 . . 
    . 5 . 5 5 5 5 5 5 . . 
    . 5 . 5 5 5 . 5 5 . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
startLevel()
