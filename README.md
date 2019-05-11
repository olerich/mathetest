# Mathe Fuer Anfaenger

Hallo Eike,  
Ich hab mal eine Testseite mit [vuepress](https://vuepress.vuejs.org/) gemacht, und es ist echt ganz cool. Einziger Nachteil ist dass erst die 1.0 Version Plugins unterstuezt und die Version ist noch nicht so ganz stabil, macht bei mir etwas Probleme mit dem dev server, und man braucht die Plugins fuer Latex.  
Ich hab mal einen [Artikel](./epiplus1) geschrieben um zu testen wie gut das wirklich geht, du kannst auch mal die Suche ausprobieren und die Seite auf dem Telefon angucken. 

### Das ist eine Testseite
So koennte eine Mathe Seite aufgebaut sein. Der Content wird einfach als Markdown eingetippt.  
::: tip
Markdown ist eine sehr einfache Formatierungssprache welche 
gerade sehr Populaer ist, hier ein link mit ein paar [Beispielen](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
:::

### MathJax unterstuezt Latex in Markdown
Mit dem [MathJax](https://vuepress.github.io/en/plugins/mathjax/) Plugin kann man direkt latex code in Markdown verwenden.  

##### Hier ein Beispiel:

Supposing that $y >= 0$ and that $[\log x]$ represents the integer part of $\log x$, let:

$$\Phi (y) = \frac {1} {2 \pi i} \int_{2 - i \infty}^{2 + i \infty} \frac {y^{\omega} \mathrm{d} \omega} {\omega \left(1 + \frac {\omega} {(\log x)^{1.1}}\right)^{[ \log x ] + 1}}, x > 1$$

Obviously, when $0 <= y <= 1$, there is $\Phi(y) = 0$. For all $y >= 0$, $\Phi(y)$ is a non-decreasing function.

When $\log x>=10^4$ and $y>= e^{2{(\log x)}^{-0.1}}$, thus:

$$1 - x^{- 0.1} <= \Phi (y) <= 1$$