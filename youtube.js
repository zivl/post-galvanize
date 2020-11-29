const puppeteer = require('puppeteer')

const MINUTE = 60000

function applyTimers(resolve) {
  setInterval(() => console.log('still watching...'), 2 * MINUTE)
  setTimeout(resolve, 10 * MINUTE)
}

;(async () => {
  const browser = await puppeteer.launch({ headless: false })
  // const browser = await puppeteer.launch({headless: false,args: [
  //   '--incognito',
  // ]});
  // const context = await browser.createIncognitoBrowserContext();
  const page = await browser.newPage()
  await page.goto('https://youtu.be/Fqa32bZVpu4')
  await new Promise(applyTimers)
  await page.screenshot({path: './screenshot.png'});
  await browser.close()
})()
