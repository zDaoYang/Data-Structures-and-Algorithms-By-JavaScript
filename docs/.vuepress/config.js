module.exports = {
  base: '/Algorithms-By-JavaScript/',
  dest: 'dist',
  title: 'JavaScrpt数据结构与算法',
  description: '学习使用 TypeScript 从零实现 axios 库',
  themeConfig: {
    editLinks: false,
    docsDir: 'docs',
    nav: [],
    sidebar: [
    {
      title: '列表',
      path: '/list/',
      sidebarDepth: 0,
      children: [
        ['chapters/list/intro', '介绍'],
        ['chapters/list/common', '常见算法'],
        ['chapters/list/apply', '应用'],
      ]
    }, ]
  }
}