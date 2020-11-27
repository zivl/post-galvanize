const puppeteer = require('puppeteer')

const LESS_THAN_2_NETWORK_CONNECTIONS = 'networkidle2'
;(async () => {
  for (let i = 0; i < 100; i++) {
    const browser = await puppeteer.launch({headless: false,args: [
      '--incognito',
    ]});
const context = await browser.createIncognitoBrowserContext();
const page = await context.newPage();
    await page.goto('https://youtu.be/Fqa32bZVpu4', { waitUntil: LESS_THAN_2_NETWORK_CONNECTIONS })
//      await new Promise(resolve => setTimeout(resolve, 1800000))
    await new Promise(resolve => setTimeout(resolve, 120000))
    await browser.close();
  }
})()
