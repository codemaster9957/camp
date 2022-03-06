// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`21000a000904040404040404040404040404040a020904040404040404040404040404040a0803030303030301010101010101010b02080e0e0e0e0e0e0d0e0303030303030b0803030303030301010101010101010b02080e0d0d0e0e0d0e0e0303030303030b0803030c03030301010101010101010b02080e0e0d0e0e0e0e0e0303030303030b0803030303030301010101010101010b02080e0e0e0e0e0e0e0d0303030303030b0803030303030301010101010101010b02080d0e0e0e0e0e0e0d0303030303030b0803030303030301010101010101010b02080e0e0e0d0d0d0e0d0303030303030b0803030303030301010101010101010b02080e0e0d0d0d0d0e0d0303030303030b0803030303030301010101010101010b02080e0e0d0d0d0d0e0e0303030303030b070505050505050505050505050505060207050505050505050505050505050506`, img`
.................2...............
.................2...............
.................2...............
.................2...............
.................2...............
.................2...............
.................2...............
.................2...............
.................2...............
.................2...............
`, [myTiles.transparency16,sprites.castle.tileGrass2,myTiles.tile2,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath7,sprites.castle.tilePath4,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath6,myTiles.tile3,sprites.castle.tileGrass1,sprites.castle.tileGrass3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
