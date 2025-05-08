document.querySelectorAll('.titlebar > ul > li').forEach(item => {
  item.addEventListener('click', (e) => {
    e.stopPropagation();
    const dropdown = item.querySelector('.dropdown');
    if (dropdown) {
      const isVisible = dropdown.style.display === 'block';
      document.querySelectorAll('.dropdown').forEach(d => d.style.display = 'none');
      dropdown.style.display = isVisible ? 'none' : 'block';
    }
  });
});

document.addEventListener('click', () => {
  document.querySelectorAll('.dropdown').forEach(d => d.style.display = 'none');
});