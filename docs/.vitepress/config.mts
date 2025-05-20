import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Education Webpage",
  description: "A VitePress Site",
  head: [
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
    ],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
    ],
    [
      'link',
      { href: 'https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap', rel: 'stylesheet' }
    ]
  ],
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
    ],
    
    // เปลี่ยนเป็น path-based sidebar
    sidebar: {
      '/': [
        {
          text: 'Navigation',
          items: [
            { text: 'หน้าแรก', link: '/' },
            {
              text: 'บทเรียน',
              collapsed: false,
              items: [
                { text: 'บทเรียนที่ 1', link: '/lesson/lesson1' },
                { text: 'บทเรียนที่ 2', link: '/lesson/lesson2' },
              ]
            },
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'API Examples', link: '/api-examples' },
          ]
        }
      ]
    },
    
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
})
