// modal.js
document.addEventListener('DOMContentLoaded', () => {
  const ham      = document.querySelector('.ham');
  const modal    = document.querySelector('.modal');
  const closeBtn = document.querySelector('.modal .close');
  const overlay  = document.querySelector('.modal-overlay');

  // ハンバーガーアイコンで開閉
  ham.addEventListener('click', () => {
    modal.classList.toggle('is-active');
  });

  // ×アイコンで閉じる
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('is-active');
  });

  // オーバーレイ（背景）クリックで閉じる
  overlay.addEventListener('click', (e) => {
    // モーダルコンテナ内をクリックした時は無視
    if (!document.querySelector('.modal-container').contains(e.target)) {
      modal.classList.remove('is-active');
    }
  });
});
