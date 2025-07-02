import elements from '../ui/elements.js';

const { carouselWrapper, iconWrapper, icons, prevButton, nextButton } = elements;

let currentIndex = 1; //初期値。

const visibleCount = window.innerWidth <= 960 ? 1 : 3;

const centerIcon = () => {
    const wrapperWidth = carouselWrapper.clientWidth;//1100
    const iconWidth = icons[0].getBoundingClientRect().width;// アイコン1つ分の幅 300px

    console.log (iconWidth);

    // currentIndex のアイコンを中央に配置するための translateX 計算
    const translateX = (-iconWidth * (currentIndex + 1)) + ((wrapperWidth / 2) + (iconWidth / 2));
    // 幅が足りない分は左に吸い寄せられる！！！真空状態がゆるされない・・・

    console.log(currentIndex);
    console.log(wrapperWidth);
    console.log(translateX);

    iconWrapper.style.transform = `translateX(${translateX}px)`;

};

//対象のiconをactiveに
const updateActiveIcons = () => {
    icons.forEach(icon => icon.classList.remove('active'));
    if (visibleCount === 1){
        icons[currentIndex].classList.add('active');
    }else{
        for (let i = currentIndex - 1; i < currentIndex - 1 + visibleCount; i++) {
            if (icons[i]) {
            icons[i].classList.add('active');
            }
        }
    }
};

const prevSlide = () => {
    if (currentIndex > 1) {
        currentIndex--;
        // iconWrapper.style.transform = `translateX(-${iconWidth * currentIndex}px)`;
        centerIcon();
        updateActiveIcons();
    }
};

const nextSlide = () => {
    if (currentIndex < icons.length - 2) { // 最後から2番目まで
        currentIndex++;
        // iconWrapper.style.transform = `translateX(-${iconWidth * currentIndex}px)`;
        centerIcon();
        updateActiveIcons();
    }
};

centerIcon();
updateActiveIcons();

prevButton.addEventListener("click",prevSlide);
nextButton.addEventListener("click",nextSlide);