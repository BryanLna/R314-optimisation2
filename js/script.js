(function(){
  window.addEventListener('load', () => {
    document.querySelectorAll('.card img').forEach(img => {
      if (img.complete) {
        img.classList.add('loaded');
      } else {
        img.addEventListener('load', () => img.classList.add('loaded'));
      }
    });
  });
})();
