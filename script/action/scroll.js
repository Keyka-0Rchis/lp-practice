import elements from '../ui/elements.js';

// 分割代入。elements.scrollTargets[0]とするところを、elementsを省略できるように。
const { scrollTargets } = elements;

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // data-scrollの値を取得
            const type = entry.target.dataset.scroll;

            // typeに応じてクラスを分岐して付与
            if (type === "fadeFromLeft") {
                entry.target.classList.add("animate-fadeFromLeft");
            } else if (type === "fadeFromRight") {
                entry.target.classList.add("animate-fadeFromRight");
            }

        // 一度アニメーションしたら監視終了（任意）
        observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 // 10%見えたら発火
});

// 全ての対象要素を監視
scrollTargets.forEach(target => observer.observe(target));
