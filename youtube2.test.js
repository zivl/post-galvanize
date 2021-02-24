require('expect-puppeteer')

const MINUTE = 60000
const MAX_TIME = 20 * MINUTE
const LESS_THAN_2_NETWORK_CONNECTIONS = 'networkidle2'

jest.setTimeout(MAX_TIME * 1.5)

describe('youtube', () => {
  beforeAll(async () => {
    // await page.goto('https://youtu.be/Fqa32bZVpu4')
    await page.goto('https://www.youtube.com/', { waitUntil: LESS_THAN_2_NETWORK_CONNECTIONS })
  });

  it('youtube video', async () => {
    // await page.$eval('#search', el => el.value = 'dj ziv levy')
    await page.waitForSelector('input[id="search"]')
    await page.$eval('input[id="search"]', el => el.focus())
    // await Promise.all('dj ziv levy'.split('').map(c => page.keyboard.type(c, { delay: 300 })))
    await page.keyboard.type('d', { delay: 300 })
    await page.keyboard.type('j', { delay: 300 })
    await page.keyboard.type(' ', { delay: 300 })
    await page.keyboard.type('z', { delay: 300 })
    await page.keyboard.type('i', { delay: 300 })
    await page.keyboard.type('v', { delay: 300 })
    await page.keyboard.type(' ', { delay: 300 })
    await page.keyboard.type('l', { delay: 300 })
    await page.keyboard.type('e', { delay: 300 })
    await page.keyboard.type('v', { delay: 300 })
    await page.keyboard.type('y', { delay: 300 })
    await page.keyboard.press(String.fromCharCode(13))
    await expect(page).toClick('a', { text: 'A Very Retro Synthetic Wave', delay: 300 })
    // await page.screenshot({ path: './screenshot.png' })
    const intervalId = setInterval(() => console.log('still watching...'), 0.25 * MINUTE)
    await new Promise((resolve) => {
      setTimeout(resolve, MAX_TIME)
    })
    global.clearInterval(intervalId)
    await expect(page).toMatch('A Very Retro Synthetic Wave')
    await page.close()
  });
});
