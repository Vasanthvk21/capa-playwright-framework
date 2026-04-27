import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dev.safenod.com/login/frontend/index.html');
  await page.getByRole('textbox', { name: 'Email / Username' }).click();
  await page.getByRole('textbox', { name: 'Email / Username' }).fill('vasantha.kumar@karanodaka.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Karanodaka@123');
  await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  await page.locator('#pledgeFrame').contentFrame().getByRole('button', { name: 'I Pledge' }).click();
  await page.locator('#bannerPopupOverlay').getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
});