describe('index', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000')
  })

  it('should display "OUR SERVICES" on page', async () => {
    await expect(page).toMatch('OUR SERVICES')
  })
})