var canvas = document.getElementById("canvas-practice")
var ctx = canvas.getContext("2d")

// X, Y, width, height
// ctx.strokeRect(100, 100, 400, 400)

ctx.fillStyle = "orange"
ctx.fillRect(canvas.width / 2, 10, 240, 240)

ctx.fillStyle = "white"
ctx.fillRect((canvas.width / 2) + 20, 30, 200, 200)

function toRadians(degrees) {
    return degrees * (Math.PI/180)
}

ctx.beginPath()
// x, y, radius, 0, radian/pi
ctx.fillStyle = "green"
ctx.arc((canvas.width / 2) + 100, 100, 12, 0, toRadians(360))
ctx.fill()
ctx.closePath

ctx.beginPath()
// x, y, radius, 0, radian/pi
ctx.fillStyle = "green"
ctx.arc((canvas.width / 2) + 140, 100, 12, 0, toRadians(360))
ctx.fill()
ctx.closePath

ctx.beginPath()
// x, y, radius, 0, radian/pi
ctx.fillStyle = "green"
ctx.arc((canvas.width / 2) + 120, 155, 40, 0, toRadians(360))
ctx.fill()
ctx.closePath

ctx.beginPath()
// x, y, radius, 0, radian/pi
ctx.fillStyle = "white"
ctx.arc((canvas.width / 2) + 120, 155, 30, 0, toRadians(180))
ctx.fill()
ctx.closePath
