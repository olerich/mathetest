module.exports = {
    title: 'Mathe fuer Anfaenger',
    description: 'Just testing',
    base: '/mathetest/',
    plugins: [
        ['mathjax', {
          target: 'svg',
          macros: {
            '*': '\\times',
          },
        }],
      ],
    themeConfig: {
        sidebar: [
          '/',
          ['/epiplus1', 'Die schoenste Gleichung']
        ]
      },    
  }