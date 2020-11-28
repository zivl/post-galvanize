const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch({ headless: false })
  // const browser = await puppeteer.launch({headless: false,args: [
  //   '--incognito',
  // ]});
  // const context = await browser.createIncognitoBrowserContext();
  const page = await browser.newPage()
  await page.goto('https://youtu.be/Fqa32bZVpu4')
  await new Promise(resolve => setTimeout(resolve, 1800000))
//   await new Promise(resolve => setTimeout(resolve, 120000))
  await page.screenshot({path: './screenshot.png'});
  await browser.close()
})()
