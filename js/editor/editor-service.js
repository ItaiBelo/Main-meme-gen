'use strict'

let gElContainer
let gElCanvas
let gCtx
let gTextInput
// let gLineText
var gX
var gY
var gFontColor
var gFontSize

var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 45,
            align: 'left',
            color: 'white',
        },
    ]
}


function drawText(y = gElContainer.offsetHeight / 5, x = gElContainer.offsetWidth / 2) {
    const lines = getLine()
    lines.forEach((line) => {
        const text = line.txt
        if (!line.x) {
            line.x = x
            line.y = y
        }
        x = line.x
        y = line.y
        gCtx.lineWidth = 7
        gCtx.strokeStyle = 'black'
        gCtx.font = `${line.size}px poppins`
        gCtx.fillStyle = line.color
        gCtx.textAlign = "center";
        gCtx.strokeText(text, x, y)
        gCtx.fillText(text, x, y)
    })
}

function saveMeme() {

}

function setGlobalVars() {
    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')
    gTextInput = document.getElementById("meme-text");
    // gLineText = gTextInput.value
    gX = gElCanvas.width / 2
    gY = gElCanvas.height / 2
}

function getLine() {
    return gMeme.lines
}

function getgMeme() {
    return gMeme;
}

function setGmemeImgId(id) {
    gMeme.selectedImgId = id
}

function changeGMemeText(txt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = txt
}

function changeGMemeId(id) {
    gMeme.selectedImgId = id
}

function updateColor(color) {
    console.log(color)
    gMeme.lines[gMeme.selectedLineIdx].color = color
    gCtx.fillStyle = gMeme.lines[gMeme.selectedLineIdx].color
    console.log(gCtx.fillStyle) ///// tho fill style is changed to he selected color but not live
    gCtx.strokeText(gMeme.lines[gMeme.selectedLineIdx].txt, gMeme.lines[gMeme.selectedLineIdx].x, gMeme.lines[gMeme.selectedLineIdx].y)
    gCtx.fillText(gMeme.lines[gMeme.selectedLineIdx].txt, gMeme.lines[gMeme.selectedLineIdx].x, gMeme.lines[gMeme.selectedLineIdx].y)
}

function renderColor() {
    gCtx.fillStyle = line.color
}

function deleteLine() {
    console.log('he')
    gTextInput.value = ''
    gMeme.lines[gMeme.selectedLineIdx].txt = ''
    drawText()
}

function addLine() {
    // debugger
    gMeme.selectedLineIdx++
    var line =
    {
        txt: '',
        size: 45,
        align: 'left',
        color: 'white',
        x: gElContainer.offsetWidth / 2,
        y: 0
    }
    switch (gMeme.selectedLineIdx) {
        case 1:
            line.y = gElContainer.offsetHeight / 1.3
            break
        default:
            line.y = gElContainer.offsetHeight / 2
    }
    gMeme.lines.push(line)
    gTextInput.value = ''
}