import elements from '../ui/elements.js';

window.addEventListener("load", () => {
  // ローディング画面をフェードアウト
  elements.loading.classList.add("loaded");

  // 本来の画面をフェードイン（遅延して確実に読み込み完了後に表示）
  setTimeout(() => {
    elements.mainContent.classList.add("loaded");
  }, 1000); // loadingのtransition時間と合わせる
});