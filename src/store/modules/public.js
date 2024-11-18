import { defineStore } from "pinia"

export const useUserStore = defineStore("user", {
  actions: {
    state: () => ({
      userInfo: null // 用户信息
    }),
    // 设置用户信息
    setUserInfo(userInfo) {
      // 设置用户信息
      this.userInfo = userInfo
    }
  },
  // 持久化用户数据，TODO 后期可考虑采用刷新机制
  persist: {
    storage: localStorage,
    paths: ["userInfo"]
  }
})
