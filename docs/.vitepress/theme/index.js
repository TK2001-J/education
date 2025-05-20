import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // เพิ่มการปรับแต่งเพิ่มเติมที่นี่ (ถ้าจำเป็น)
  }
}