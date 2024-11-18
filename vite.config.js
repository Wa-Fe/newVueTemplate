import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { resolve } from "path"
import { fileURLToPath, URL } from "node:url"

// 打包分析
import { visualizer } from "rollup-plugin-visualizer"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 分析
    visualizer({
      gzipSize: true,
      brotliSize: true,
      emitFile: false,
      filename: "analyze.html", //分析图生成的文件名
      open: false //如果存在本地服务端口，将在打包后自动展示
    })
  ],
  resolve: {
    extensions: [".js", ".json", ".vue"],
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@icons": resolve(__dirname, "src/assets/images/icons")
    }
  },
  server: {
    host: "0.0.0.0", // 允许所有IP访问
    port: "7000",
    open: false, //自动打开
    base: "./ ", //生产环境路径
    proxy: {
      // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
      // 正则表达式写法
      "^/api": {
        target: "xxx", // 后端服务实际地址
        changeOrigin: true, //开启代理
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }
})
