'use strict'
const moreBtn = document.querySelector('.header__newsMoreCnt');
const moreMenu = document.querySelector('.header__newsContainer');
const nextMore = document.querySelector('.openList');
const nextMoreList = document.querySelector('.category__list');

moreBtn.onclick = function () {
    moreMenu.classList.toggle('header__newsContainer-active');
    nextMoreList.classList.remove('category__list-active');
}
nextMore.onclick = function () {
    nextMoreList.classList.toggle('category__list-active');
}
