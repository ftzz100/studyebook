module.exports = {
    title: 'EBOOK',
    description: 'studyebook',
    dest: './dist', //打包输出在项目根目录下的 dist 文件夹
    head: [
      ['link', {rel: 'icon', href: '/logo.jpg'}], //标签上图标
    ],
    base: '/studyebook/',
    //host: '0.0.0.0',
    port: 8082,

    
    themeConfig: {
        logo: '/logo.jpg',
        //gitc 仓库地址
        repo: 'ftzz100/studyebook',
        // 如果你的文档不在仓库的根部
        docsDir: 'docs',
        // 可选，默认为 master
        docsBranch: 'master',
        // 默认为 true，设置为 false 来禁用
        editLinks: false,
        lastUpdated: 'lastUpdate', // string | boolean
        //导航栏
        nav: [
              { text: 'Home', link: '/' },
              {
                text: '分类',  //默认显示        
                ariaLabel: '分类',   //用于识别的label
                items: [
                    { text: '前端', link: '/html/0.md' },  
                    //点击标签前端转至link的markdown文件生成的页面
                    { text: '后端', link: '/php/0.md' },
                    //{ text: '琐碎', link: '/pages/folder2/test4.md' },
                ]
              },
            ],
         sidebar: {
          '/html/':[
              {
                  title: '前端学习笔记',   // 必要的
                  collapsable: true, // 可选的, 默认值是 true,
                  sidebarDepth: 2,    // 可选的, 设置嵌套层级,默认值是 1
                  children: [
                      ['0.md','介绍']
                  ]
              }
          ],
          
         },
        //sidebar: 'auto',
        //search: true,
        
        
      },  
    
    
}
