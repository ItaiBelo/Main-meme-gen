'use strict'
let gElCanvas = document.getElementById('my-canvas')
let gCtx = gElCanvas.getContext('2d')

function initEditor() {
    resizeCanvas()
    // setSetting()
    window.addEventListener('resize', () => {
        resizeCanvas()
    })
}

function showEditor() {
    document.querySelector('.editor').style.display = 'flex'
    initEditor()
}
