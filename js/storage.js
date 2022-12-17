'use strict'
var gSavedMemeNum = 0
function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return JSON.parse(val)
}

function loadImgFromLocalStorage() {
    const savedMemes = localStorage.getItem(STORAGE_MEMES_KEY)
    return savedMemes
}

function saveCanvas() {
    const savedMeme = { meme: `new meme ${++gSavedMemeNum}`, url: gElCanvas.toDataURL("image/png") }
    gSavedMemes = loadFromStorage(STORAGE_MEMES_KEY)
    if (!gSavedMemes) gSavedMemes = []
    gSavedMemes.push(savedMeme)
    saveToStorage(STORAGE_MEMES_KEY, gSavedMemes)
}