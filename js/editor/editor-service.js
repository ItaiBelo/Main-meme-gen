'use strict'

let gElCanvas
let gCtx
let gTextInput
let gLineText
var gX
var gY
var gFontColor
var gFontSize

var gMeme = {
    selectedImgId: 0, ////18
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 60,
            align: 'left',
            color: 'white'
        }
    ]
}

function drawText(posX = gX, posY = gY) {
    const lines = getLine()
    console.log(lines);
    lines.forEach(line => {
        const text = line.txt
        gCtx.lineWidth = 4
        gCtx.strokeStyle = 'black'
        gCtx.fillStyle = line.color
        gCtx.textBaseline = 'middle'
        gCtx.fillText(text, posX, posY)
        gCtx.strokeText(text, posX, posY)
    })
}

function setGlobalVars() {
    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')
    gTextInput = document.getElementById("meme-text");
    gLineText = gTextInput.value
    gX = gElCanvas.width / 2
    gY = 125
}

function getLine() {
    return gMeme.lines
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