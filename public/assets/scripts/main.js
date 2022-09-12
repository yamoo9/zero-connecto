import { $, attr } from './dom.js';
import { renderCurrentYear } from './copyright.js';
import {
  detectDarkMode,
  detectDarkmodeOS,
  hasDarkMode,
  addDarkMode,
  removeDarkMode,
  saveDarkMode,
} from './darkMode.js';

const LABEL = {
  light: '라이트 모드 전환',
  dark: '다크 모드 전환',
};

const ICON = {
  sun: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z',
  moon: 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z',
};

const changeButtonLabel = (buttonNode, label) => {
  attr(buttonNode, {
    'aria-label': label,
    title: label,
  });
};

const changeButtonIcon = (buttonNode, iconType) => {
  attr($('svg path', buttonNode), 'd', iconType);
};

const changeButtonLabelAndIcon = () => {
  if (hasDarkMode()) {
    changeButtonLabel(toggleDarkModeButton, LABEL.light);
    changeButtonIcon(toggleDarkModeButton, ICON.sun);
  } else {
    changeButtonLabel(toggleDarkModeButton, LABEL.dark);
    changeButtonIcon(toggleDarkModeButton, ICON.moon);
  }
};

const handleToggleDarkMode = ({ target: buttonNode }) => {
  if (hasDarkMode()) {
    changeButtonLabel(buttonNode, LABEL.dark);
    changeButtonIcon(buttonNode, ICON.moon);
    removeDarkMode();
    saveDarkMode('off');
  } else {
    changeButtonLabel(buttonNode, LABEL.light);
    changeButtonIcon(buttonNode, ICON.sun);
    addDarkMode();
    saveDarkMode('on');
  }
};

const toggleDarkModeButton = $('.toggleDarkMode');
toggleDarkModeButton?.addEventListener('click', handleToggleDarkMode);

detectDarkMode(changeButtonLabelAndIcon);
detectDarkmodeOS(changeButtonLabelAndIcon);
renderCurrentYear($('.copyright time'));
