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
            font: 'impact'
        },
    ]
}

function drawText(y = gElCanvas.offsetHeight / 5, x = gElCanvas.offsetWidth / 2) {
    const lines = getLines()
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
        gCtx.font = `${line.size}px ${line.font}`
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

function getLines() {
    return gMeme.lines
}

function getgMeme() {
    return gMeme;
}

function getCurrLine() {
    const lines = getLines()
    return lines[gMeme.selectedLineIdx]
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

function switchLine() {
    const lines = getLines()
    const currLine = getCurrLine()
    const previousLine = lines[gMeme.selectedLineIdx - 1]
    const lastLine = lines[lines.length - 1]

    if (!gMeme.selectedLineIdx) {
        gMeme.selectedLineIdx += (lines.length) - 1
        gTextInput.value = lastLine.txt
        return
    }
    gTextInput.value = previousLine.txt
    gMeme.selectedLineIdx--
}

function addLine() {
    gMeme.selectedLineIdx++
    var line =
    {
        txt: '',
        size: 45,
        align: 'center',
        color: 'white',
        font: 'impact',
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
    var lines = getLines()
    const currLine = getCurrLine()
    var previousLine = lines[gMeme.selectedLineIdx - 1]
    gTextInput.value = ''
    currLine.txt = ''
    renderCanvas(currLine.txt)
    if (!gMeme.selectedLineIdx) return
    gTextInput.value = previousLine.txt
    gMeme.selectedLineIdx--
}

function lineUp() {
    const currLine = getCurrLine()
    currLine.y -= 5
}

function lineDown() {
    const currLine = getCurrLine()
    currLine.y += 5
}

function biggerFont() {
    const currLine = getCurrLine()
    currLine.size += 3
}

function smallerFont() {
    const currLine = getCurrLine()
    currLine.size -= 3
}

function updateColor(color) {
    const currLine = getCurrLine()
    currLine.color = color
}

function alignRight() {
    const currLine = getCurrLine()
    currLine.x = gElCanvas.width / 1.2
    currLine.align = 'right'
}

function alignCenter() {
    const currLine = getCurrLine()
    currLine.align = 'center'
    currLine.x = gElCanvas.width / 2
}

function alignLeft() {
    const currLine = getCurrLine()
    currLine.align = 'left'
    currLine.x = gElCanvas.width / 10
}

function toggleMenu() {
    document.body.classList.toggle('menu-open');
}

function changeFontStyle(font) {
    const currLine = getCurrLine()
    currLine.font = font
}