import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, NgIf, NgFor],
  template: `
      <div class="min-h-screen flex flex-col bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
          <header class="p-4 shadow bg-white dark:bg-gray-800">
              <div class="max-w-5xl mx-auto flex items-center justify-between">
                  <a routerLink="/" class="flex items-center gap-2">
                      <img src="quicktools-logo.png" alt="QuickTools Logo" class="h-14" />
                      <span class=" text-3xl">QuickTools</span>
                  </a>

                  <!-- Desktop nav -->
                  <nav class="hidden md:flex gap-4 text-sm">
                      <a *ngFor="let link of links"
                         [routerLink]="link.path"
                         routerLinkActive="text-blue-600"
                         class="hover:underline">{{ link.label }}</a>
                  </nav>

                  <!-- Mobile toggle -->
                  <button class="md:hidden text-xl" (click)="toggleMenu()">☰</button>
              </div>

              <!-- Mobile nav -->
              <div *ngIf="menuOpen()" class="md:hidden mt-4 flex flex-col gap-2">
                  <a *ngFor="let link of links"
                     [routerLink]="link.path"
                     routerLinkActive="text-blue-600"
                     (click)="closeMenu()"
                     class="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                      {{ link.label }}
                  </a>
              </div>
          </header>

          <main class="flex-1 flex items-start justify-center p-6">
              <router-outlet />
          </main>

          <footer class="p-4 text-center text-sm bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 space-y-2">
              <div>© 2025 QuickTools. All rights reserved.</div>
              <div class="flex justify-center gap-4 text-xs">
                  <a routerLink="/about" class="underline hover:text-blue-600">About</a>
                  <a routerLink="/privacy" class="underline hover:text-blue-600">Privacy Policy</a>
                  <a href="mailto:contact&#64;quicktools.tools" class="underline hover:text-blue-600">Contact</a>
              </div>
          </footer>
      </div>
  `,
})
export class AppComponent {
  menuOpen = signal(false);

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  links = [
    { path: '/utm', label: 'UTM Generator' },
    { path: '/password', label: 'Password Generator' },
    { path: '/json-csv', label: 'JSON ⇄ CSV' },
    { path: '/base64', label: 'Base64' },
    { path: '/markdown', label: 'Markdown' },
    { path: '/lorem', label: 'Lorem Ipsum' },
    { path: '/validators', label: 'Validators' },
    { path: '/blog', label: 'Blog' },
  ];
}
