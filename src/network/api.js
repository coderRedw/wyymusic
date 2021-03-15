import { request } from "./index";

// 导航区搜索区
export function navSearch(keywords) {
  return request({
    url: '/search?',
    params: {
      keywords
    }
  })
}
