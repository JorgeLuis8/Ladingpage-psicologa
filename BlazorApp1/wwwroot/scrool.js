
  // Desativa a restauração automática de rolagem
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  // Garante que a página sempre inicie no topo ao carregar
  window.addEventListener("load", function () {
    window.scrollTo(0, 0);
  });

