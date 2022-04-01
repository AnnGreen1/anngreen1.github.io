module.exports = {
    title: 'AnnGreen.icu', 
    description: 'AnnGreen.icu,I see you.',
    head: [
        ['link', { rel: 'icon', href: '' }]
        //  ['link', { rel: 'manifest', href: '/manifest.json' }],
    ],themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '技术', link: '/tech/'},
            { text: '收集箱', link: '/collection/'},
            { text: '关于', link: '/about/' },
            { text: 'Github', link: 'https://github.com/AnnGreen1' },
        ],
        sidebar: {
            '/tech/': [
                'php arrayRand()',
                '零基础thinkPHP验证码刷新及验证',
                'AJAX访问数据库',
                'form提交不跳转',
                'phpmailer实现简单邮箱验证码',
                '解决经过babel转换后的代码，中文转成unicode问题',
                'HTML网页页脚的版权标志字符',
                'div被遮挡，让一个div层浮在最上层的方法',
                '如何去掉网页的横向滚动条，竖向滚动条',
                '把pdf文件放在html页面中显示的方法'
               ],
            '/collection/': [
                'Markdown入门',
                'Github上的star和fork是什么',
                '如何查看office的剩余激活时间',
                '特拉亨伯格速算'
                ]
            },
        sidebarDepth: 2,
        lastUpdated: 'Last Updated', 
    },
    serviceWorker: true,
}