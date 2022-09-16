const DARK_MODE_KEY = 'dark';
const html = document.documentElement;
const toggleThemeButton = document.querySelector('.toggleThemeButton');

function changeDarkMode() {
  // reset
  toggleThemeButton?.querySelector('.block')?.classList.remove('block');
  toggleThemeButton?.querySelector('.hidden')?.classList.remove('hidden');

  // condition
  if (html.classList.contains(DARK_MODE_KEY)) {
    html.classList.remove(DARK_MODE_KEY);
    toggleThemeButton.querySelector('.sun')?.classList.add('hidden');
    toggleThemeButton.querySelector('.moon')?.classList.add('block');
    toggleThemeButton?.setAttribute('aria-label', '다크 모드로 전환');
    toggleThemeButton?.setAttribute('title', '다크 모드로 전환');
  } else {
    html.classList.add(DARK_MODE_KEY);
    toggleThemeButton.querySelector('.sun')?.classList.add('block');
    toggleThemeButton.querySelector('.moon')?.classList.add('hidden');
    toggleThemeButton?.setAttribute('aria-label', '라이트 모드로 전환');
    toggleThemeButton?.setAttribute('title', '라이트 모드로 전환');
  }
}

changeDarkMode();

toggleThemeButton?.addEventListener('click', function handleDarkMode() {
  changeDarkMode();
});
