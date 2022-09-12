const { matchMedia, localStorage } = window;
const htmlNode = document.documentElement;
const DARK_MODE = 'dark';

export const addDarkMode = () => htmlNode.classList.add(DARK_MODE);
export const removeDarkMode = () => htmlNode.classList.remove(DARK_MODE);
export const hasDarkMode = () => htmlNode.classList.contains(DARK_MODE);

export const saveDarkMode = (mode) => localStorage.setItem('darkMode', mode);
export const loadDarkMode = () => localStorage.getItem('darkMode');

export const detectDarkMode = (callback) => {
  loadDarkMode() === 'on' ? addDarkMode() : removeDarkMode();
  callback?.();
};

export const detectDarkmodeOS = (callback) => {
  matchMedia('(prefers-color-scheme: dark').addEventListener(
    'change',
    callback
  );
};

detectDarkmodeOS((e) => {
  if (e.matches) {
    addDarkMode();
    saveDarkMode('on');
  } else {
    removeDarkMode();
    saveDarkMode('off');
  }
});
