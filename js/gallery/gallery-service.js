'use strict'

let gKeywordSearchCountMap
let gSavedMemes = []
let gFilterBy
let gImgs = [
    { id: 1, url: 'images/1.jpg', keywords: ['celebs', 'mad'] },
    { id: 2, url: 'images/2.jpg', keywords: ['animals', 'Cute'] },
    { id: 3, url: 'images/3.jpg', keywords: ['animals', 'baby'] },
    { id: 4, url: 'images/4.jpg', keywords: ['animals', 'cat'] },
    { id: 5, url: 'images/5.jpg', keywords: ['funny', 'baby'] },
    { id: 6, url: 'images/6.jpg', keywords: ['funny', 'tv'] },
    { id: 7, url: 'images/7.jpg', keywords: ['funny', 'baby'] },
    { id: 8, url: 'images/8.jpg', keywords: ['funny', 'cat'] },
    { id: 9, url: 'images/9.jpg', keywords: ['funny', 'baby'] },
    { id: 10, url: 'images/10.jpg', keywords: ['funny', 'celebs'] },
    { id: 11, url: 'images/11.jpg', keywords: ['tv', 'cat'] },
    { id: 12, url: 'images/12.jpg', keywords: ['funny', 'tv'] },
    { id: 13, url: 'images/13.jpg', keywords: ['funny', 'tv'] },
    { id: 14, url: 'images/14.jpg', keywords: ['tv', 'mad'] },
    { id: 15, url: 'images/15.jpg', keywords: ['tv', 'mad'] },
    { id: 16, url: 'images/16.jpg', keywords: ['funny', 'tv'] },
    { id: 17, url: 'images/17.jpg', keywords: ['mad', 'celebs'] },
    { id: 18, url: 'images/18.jpg', keywords: ['funny', 'tv'] },
];

function getImgs() {
    return gImgs
}

function drawImg(file) {
    const elImg = new Image()
    elImg.src = file
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
    }
}

function getImgById(id) {
    return gImgs.find(img => img.id === +id)
}

function getFilteredImgs(searchWord) {
    return gImgs.filter(img => {
        return img.keywords.some(keyword => keyword.includes(searchWord.toLowerCase()));
    });
}

function _createKeyWordsMap() {
    const imgs = getImgs()
    let keyWordMap = {}
    ///////img arr run
    imgs.forEach((img) => {
        const keys = img.keywords;
        /////keys arr run
        keys.forEach((key) => {
            if (!keyWordMap[key]) keyWordMap[key] = 0;
            keyWordMap[key]++;
        })
    })
    return keyWordMap;
}

function getGkeysMap() {
    return gKeywordSearchCountMap
}

