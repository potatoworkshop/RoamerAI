const { chromium } = require('playwright');

// 异步主函数
async function main() {
  // 启动浏览器（无头模式）
  const browser = await chromium.launch({ headless: true });

  try {
    // 创建新页面
    const page = await browser.newPage();

    // 导航到目标URL
    await page.goto('https://httpbin.org/html');

    // 读取页面HTML内容
    const content = await page.content();

    // 输出内容
    console.log('页面内容:');
    console.log(content);

  } finally {
    // 关闭浏览器
    await browser.close();
  }
}

// 运行程序
main().catch(console.error);
