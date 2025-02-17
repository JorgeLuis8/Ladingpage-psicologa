document.addEventListener("DOMContentLoaded", function() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    item.addEventListener('click', function() {
      const answer = item.querySelector('.faq-answer');
      const icon = item.querySelector('.faq-static-icon');
      
      // Se o item já estiver aberto, fecha-o
      if(answer.classList.contains('open')) {
        answer.classList.remove('open');
        answer.style.maxHeight = null;
        icon.textContent = "▶";
      } else {
        // Abre o item ajustando o max-height para o tamanho do conteúdo
        answer.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + "px";
        icon.textContent = "▼";
      }
    });
  });
});