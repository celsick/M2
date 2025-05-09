const express = require('express');
const router = express.Router();

// Roteamento para páginas dinâmicas
router.get('/', (req, res) => {
  res.render('layout/main', {  // Aqui, renderiza a view 'layout/main.ejs'
    pageTitle: 'Página Inicial',
    content: 'pages/page1'  // Passa a variável 'content' para a view, que pode ser usada no layout
  });
});

router.get('/about', (req, res) => {
  res.render('layout/main', {  // Aqui, renderiza a view 'layout/main.ejs'
    pageTitle: 'Sobre',
    content: 'pages/page2'  // Passa a variável 'content' para a view, que pode ser usada no layout
  });
});

module.exports = router;
