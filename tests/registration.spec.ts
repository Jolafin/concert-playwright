import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  // Go to https://concert-registration.vercel.app/
  await page.goto("https://concert-registration.vercel.app/");

  // Click input[name="firstName"]
  await page.locator('input[name="firstName"]').click();

  // Fill input[name="firstName"]
  await page.locator('input[name="firstName"]').fill("Jody-Ann");

  // Press Tab
  await page.locator('input[name="firstName"]').press("Tab");

  // Click input[name="lastName"]
  await page.locator('input[name="lastName"]').click();

  // Fill input[name="lastName"]npx playwr
  await page.locator('input[name="lastName"]').fill("Moodie");

  // Click input[name="email"]
  await page.locator('input[name="email"]').click();

  // Fill input[name="email"]
  await page.locator('input[name="email"]').fill("Jomoodie@mail.com");

  // Click input[name="age"]
  await page.locator('input[name="age"]').click();

  // Fill input[name="age"]
  await page.locator('input[name="age"]').fill("25");

  // Select option2
  await page.locator('select[name="tour"]').selectOption("option2");

  // Click label:has-text("VIP")
  await page.locator('label:has-text("VIP")').click();

  // Click input[name="ticketNum"]
  await page.locator('input[name="ticketNum"]').click();

  // Fill input[name="ticketNum"]
  await page.locator('input[name="ticketNum"]').fill("4");

  // Click text=Submit
  await page.locator("text=Submit").click();

  // Click text=Close
  await page.locator("text=Close").click();
});
