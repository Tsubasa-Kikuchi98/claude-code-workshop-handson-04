// ============================================
// AI駆動開発ワークショップ サポートポータル
// メニュー開閉スクリプト
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-button');
  const mobileNav = document.querySelector('.mobile-nav');

  if (!menuButton || !mobileNav) {
    return;
  }

  menuButton.addEventListener('click', () => {
    if (mobileNav.hasAttribute('hidden')) {
      mobileNav.removeAttribute('hidden');
      menuButton.setAttribute('aria-label', 'メニューを閉じる');
    } else {
      mobileNav.setAttribute('hidden', '');
      menuButton.setAttribute('aria-label', 'メニューを開く');
    }
  });

  // メニュー内のリンクをクリックしたら閉じる
  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.setAttribute('hidden', '');
      menuButton.setAttribute('aria-label', 'メニューを開く');
    });
  });
});
