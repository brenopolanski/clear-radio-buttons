(() => {
  const clearRadioButtons = document.querySelectorAll('input[type=radio]');

  Array.prototype.filter.call(clearRadioButtons, (element) => {
    element.checked = false;
  });
})();
