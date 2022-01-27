module.exports = {
  base: '',
  dest: 'dist',
  title: 'JavaScrpt数据结构与算法',
  description: 'JavaScrpt数据结构与算法',
  themeConfig: {
    editLinks: false,
    docsDir: 'docs',
    nav: [],
    sidebar: [
    {
      title: '数据结构',
      path: 'structure/',
      sidebarDepth: 0,
      children: [
        ['structure/intro', '介绍'],
        ['graph ', '图'],
      ]
    }, ]
  }
}