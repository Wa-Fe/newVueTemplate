import http from "../http"

// 获取基础配置-支持筛选  默认全部
export const getBasicConfig = (data) => {
  return http.get("/pc/basic_config", data)
}
