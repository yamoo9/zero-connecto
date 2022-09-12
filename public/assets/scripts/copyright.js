export const renderCurrentYear = (node) => {
  let currentYear = new Date().getFullYear();
  if (node && 'nodeType' in node && node?.nodeType === document.ELEMENT_NODE) {
    node.textContent = currentYear;
  }
};
