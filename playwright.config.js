import { defineConfig } from '@playwright/test';
export default defineConfig({ testDir: './tests', testMatch: '**/*.spec.js', use: { baseURL: 'http://127.0.0.1:5183', headless: true }, webServer: { command: 'npm run dev -- --port 5183', url: 'http://127.0.0.1:5183', reuseExistingServer: false }, reporter: 'list' });
