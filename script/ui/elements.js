// スクロールアニメーション
const scrollTargets = document.querySelectorAll('[data-scroll]');

// ローディングアニメーション
const loading = document.getElementById("loading");
const mainContent = document.getElementById("main-content");

// カルーセル
const carouselWrapper = document.querySelector('.carousel-wrapper');
const iconWrapper = document.querySelector('.icon-wrapper');
const icons = document.querySelectorAll('.icon');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

export default{
    scrollTargets,
    loading,
    mainContent,
    carouselWrapper,
    iconWrapper,
    icons,
    prevButton,
    nextButton
}