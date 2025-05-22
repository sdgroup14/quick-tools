import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
      <div class="min-h-screen flex flex-col bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
          <header class="p-4 shadow bg-white dark:bg-gray-800">
              <div class="max-w-5xl mx-auto flex items-center justify-between">
                  <div class="text-2xl font-bold">🚀 QuickTools</div>
                  <nav class="flex gap-4 text-sm">
                      <a routerLink="/utm" routerLinkActive="text-blue-600" class="hover:underline">UTM Generator</a>
                      <a routerLink="/password" routerLinkActive="text-blue-600" class="hover:underline">Password Generator</a>
                      <a routerLink="/json-csv" routerLinkActive="text-blue-600" class="hover:underline">JSON ⇄ CSV</a>
                      <a routerLink="/base64" routerLinkActive="text-blue-600" class="hover:underline">Base64</a>
                      <a routerLink="/markdown" routerLinkActive="text-blue-600" class="hover:underline">Markdown</a>
                      <a routerLink="/lorem" routerLinkActive="text-blue-600" class="hover:underline">Lorem</a>
                      <a routerLink="/validators" routerLinkActive="text-blue-600" class="hover:underline">Validators</a>

                  </nav>
              </div>
          </header>

          <main class="flex-1 flex items-start justify-center p-6">
              <router-outlet />
          </main>

          <footer class="p-4 text-center text-sm bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
              © 2025 QuickTools. All rights reserved.
          </footer>
      </div>
  `,
})
export class AppComponent {}
