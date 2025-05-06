document.addEventListener('DOMContentLoaded', function() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryImgs = document.querySelectorAll('.gallery-img');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const filter = this.getAttribute('data-filter');
      galleryImgs.forEach(img => {
        if (filter === 'all' || img.classList.contains(filter)) {
          img.style.display = 'inline-block';
        } else {
          img.style.display = 'none';
        }
      });
    });
  });
}); 