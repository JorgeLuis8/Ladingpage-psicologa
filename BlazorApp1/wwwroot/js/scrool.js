// Desativa a restauração automática de rolagem
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener("load", function () {
  // Usar um delay pode ajudar a garantir que todo o conteúdo esteja renderizado
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, 200); // 200ms de delay (ajuste se necessário)
});
