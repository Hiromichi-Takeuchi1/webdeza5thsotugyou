// main.js
document.addEventListener('DOMContentLoaded', () => {
  const ham = document.querySelector('.ham');
  const nav = document.querySelector('.header__nav');

  ham.addEventListener('click', () => {
    ham.classList.toggle('is-active');
    nav.classList.toggle('is-open');
  });
});

// main.js

// 1. ScrollTrigger を GSAP に登録
gsap.registerPlugin(ScrollTrigger);

// 2. .section-head 要素ごとにアニメーション設定
document.querySelectorAll('.section-head').forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,           // どの要素をトリガーにするか
      start: 'top 80%',       // 要素の上端がビューポートの 80% の位置に来たら
      // markers: true,       // 動作確認用のマーカー表示
      toggleActions: 'play none none none' 
    },
    y: 50,                   // 下から 50px 上に移動
    opacity: 0,              // 透明 → 不透明
    duration: 1,             // アニメーションの長さ（秒）
    ease: 'power2.out'       // イージング
  });
});

  gsap.from('.contact-section .icons img', {
    scrollTrigger: {
      trigger: '.contact-section',
      start:   'top 80%',
      toggleActions: 'play none none none',
      // markers: true, // デバッグ用
    },
    x:        -300,           // 左 300px から
    rotation: 360,            // 360° 回転
    opacity:  0,              // 透明 → 不透明
    duration: 1,
    ease:     'back.out(1.7)',// バウンド感
    stagger:  0.2             // 0.2秒ずつずらして順番に
  });
