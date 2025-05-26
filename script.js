window.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close-btn');
  
    // Показати модальне вікно через 10 секунд
    setTimeout(() => {
      modal.style.display = 'block';
    }, 10000);
  
    // Закрити модальне вікно
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    // Закриття при кліку поза вікном
    window.addEventListener('click', (e) => {
      if (e.target == modal) {
        modal.style.display = 'none';
      }
    });
  });
  