const puppeteer = require('puppeteer')

// const NADLAN = 'נדל"ן'

const LESS_THAN_2_NETWORK_CONNECTIONS = 'networkidle2'
;(async () => {
  const browser = await puppeteer.launch({ headless: false }) // pass false to see magic in action!
  const page = await browser.newPage()
  await page.goto('https://my.yad2.co.il/login.php', { waitUntil: LESS_THAN_2_NETWORK_CONNECTIONS })
  await page.waitForSelector('#userName')
  await page.$eval('#userName', (el, username) => el.value = username, process.env.SIGNIN)
    await page.$eval('#password', (el, password) => el.value = password, process.env.PASSWORD)
    await page.click('#submitLogonForm')
    await page.waitForSelector('.txt')
    const sections = await page.$$('.txt')
    await sections[1].click()
    await page.waitForSelector('#feed tr.item')
    await page.click('#feed tr.item')
    await page.waitForSelector('tr td iframe')
    console.log('here2')
    const frames = await page.frames();
    const postFrame = frames.find(f => console.log(f.url()))
    await postFrame.waitFor("#bounceRatingOrderBtn")
    console.log('here')
    await postFrame.click("#bounceRatingOrderBtn")

    // frames.forEach(async f => console.log(await (await f.getProperty('src')).jsonValue()))








 /*await page.waitForSelector('a[data-link-name="Men"]')
  await page.click('a[data-link-name="Men"]')
  await page.waitForSelector('a[data-link-id="02-04-03-09"]')
  await page.click('a[data-link-id="02-04-03-09"]') //Jeans
  await page.waitForSelector('section.Details')
  const elements = await page.$$('section.Details')
  console.log('Found Items: ', elements.length)
  await Promise.all(
    elements.map(async function(el) {
      const priceSection = await el.$('.Price a')
      const title = await (await priceSection.getProperty('title')).jsonValue()
      const price = await (await priceSection.getProperty('innerHTML')).jsonValue()
      const imageUrl = await (await (await el.$('.Image img')).getProperty('src')).jsonValue()

      return {
        title: title.substring(0, title.indexOf('|')),
        price,
        imageUrl
      }
    })
  ).then(console.log)*/

//   await browser.close()
})()
