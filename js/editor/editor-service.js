'use strict'
const STORAGE_MEMES_KEY = 'Saved'
let gElCanvas
let gCtx
let gTextInput

var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [
        {
            txt: '',
            size: 45,
            align: 'center',
            color: 'white',
        },
    ]
}

function drawText(y = gElCanvas.offsetHeight / 5, x = gElCanvas.offsetWidth / 2) {
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
        gCtx.font = `${line.size}px impact`
        gCtx.fillStyle = line.color
        gCtx.textAlign = line.align;
        gCtx.strokeText(text, x, y)
        gCtx.fillText(text, x, y)
    })
}

function setGlobalVars() {
    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')
    gTextInput = document.getElementById("meme-text");
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

function addLine() {
    gMeme.selectedLineIdx++
    var line =
    {
        txt: '',
        size: 45,
        align: 'center',
        color: 'white',
        x: gElCanvas.offsetWidth / 2,
        y: 0
    }
    switch (gMeme.selectedLineIdx) {
        case 1:
            line.y = gElCanvas.offsetHeight / 1.3
            break
        default:
            line.y = gElCanvas.offsetHeight / 2
    }
    gMeme.lines.push(line)
    gTextInput.value = ''
}

function deleteLine() {
    var lines = getLine()
    var currLine = lines[gMeme.selectedLineIdx]
    var previousLine = lines[gMeme.selectedLineIdx - 1]
    gTextInput.value = ''
    currLine.txt = ''
    renderCanvas(currLine.txt)
    if (!gMeme.selectedLineIdx) return
    gTextInput.value = previousLine.txt
    gMeme.selectedLineIdx--
}

function lineUp() {
    var lines = getLine()
    var currLine = lines[gMeme.selectedLineIdx]
    currLine.y -= 5
    renderCanvas(currLine.txt)
}

function lineDown() {
    var lines = getLine()
    var currLine = lines[gMeme.selectedLineIdx]
    currLine.y += 5
    renderCanvas(currLine.txt)
}

function biggerFont() {
    var lines = getLine()
    var currLine = lines[gMeme.selectedLineIdx]
    currLine.size += 3
    renderCanvas(currLine.txt)
}

function smallerFont() {
    var lines = getLine()
    var currLine = lines[gMeme.selectedLineIdx]
    currLine.size -= 3
    renderCanvas(currLine.txt)
}

function updateColor(color) {
    var lines = getLine()
    var currLine = lines[gMeme.selectedLineIdx]
    currLine.color = color
    renderCanvas(currLine.txt)
}

function alignRight() {
    var lines = getLine()
    var currLine = lines[gMeme.selectedLineIdx]
    currLine.x = gElCanvas.width / 1.2
    currLine.align = 'right'
    renderCanvas(currLine.txt)
}

function alignCenter() {
    var lines = getLine()
    var currLine = lines[gMeme.selectedLineIdx]
    currLine.align = 'center'
    currLine.x = gElCanvas.width / 2
    renderCanvas(currLine.txt)
}

function alignLeft() {
    var lines = getLine()
    var currLine = lines[gMeme.selectedLineIdx]
    currLine.align = 'left'
    currLine.x = gElCanvas.width / 10
    renderCanvas(currLine.txt)
}

function toggleMenu() {
    document.body.classList.toggle('menu-open');
}

