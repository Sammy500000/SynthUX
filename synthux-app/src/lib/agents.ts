import { chromium } from 'playwright';

export async function runAgent(url: string, tasks: any[]) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const results = [];
  for (const task of tasks) {
    try {
      switch (task.type) {
        case 'click':
          await page.click(task.selector);
          results.push({ task, status: 'success' });
          break;
        case 'fill':
          await page.fill(task.selector, task.value);
          results.push({ task, status: 'success' });
          break;
        case 'screenshot':
          await page.screenshot({ path: task.path });
          results.push({ task, status: 'success' });
          break;
        default:
          results.push({ task, status: 'unknown' });
      }
    } catch (error) {
      results.push({ task, status: 'error', error: error.message });
    }
  }

  await browser.close();
  return results;
}
