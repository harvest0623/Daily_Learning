// 导入两个库
import dotenv from 'dotenv'
import { createCrawl, createCrawlOpenAI } from 'x-crawl'  // 导入爬虫相关的函数

// 将.env 文件中的环境变量读取到 process.env 中
dotenv.config()

// 创建爬虫实例
const crawlApp = createCrawl({
  maxRetry: 3,  // 最大重试次数
  intervalTime: {min: 1000, max: 3000}
})

// AI 爬虫实例
const crawlOpenAI = createCrawlOpenAI({
  clientOptions: {
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: process.env.OPENAI_API_BASE_URL,
  },
})

// 帮我读取这个网址对应的页面代码
crawlApp.crawlPage('https://movie.douban.com/cinema/nowplaying/nanchang/')
.then(async(res) => {
  const {page, browser} = res.data

  // 我要的是哪一块代码
  const targetSelector = '#nowplaying'
  // 等待目标加载完毕
  await page.waitForSelector(targetSelector)  
  // 将这一块代码单独读取出来
  const highlyHTML = await page.$eval(targetSelector, (el) => el.innerHTML)

  // console.log(highlyHTML);

  const result = await crawlOpenAI.parseElements(
    highlyHTML,
    `获取正在上映的电影数据，将电影名称、电影的图片链接、电影的上映时间、电影的评分获取到。
    输出格式为 JSON 数组。 如：
    [
      {
        "image": "https://example.com/movie1.jpg",
        "name": "电影名称",
        "time": "上映时间",
        "scode": "电影评分"
      }
    ]
    `
  )
})