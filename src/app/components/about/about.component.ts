import {Component, inject, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow space-y-4">
      <h1 class="text-2xl font-bold">About QuickTools</h1>
      <p>QuickTools is a collection of free online utilities built by a frontend developer for developers, marketers, and content creators.</p>
      <p>The tools are serverless, fast, and 100% privacy-safe. No logins, no tracking — just useful utilities.</p>
      <p>If you have suggestions or want to collaborate, contact: <a href="mailto:contact&#64;quicktools.tools" class="text-blue-600 underline">contact&#64;quicktools.tools</a>
      </p>
    </div>
  `
})
export class AboutComponent  implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('About QuickTools');
    this.meta.updateTag({
      name: 'description',
      content: 'Learn about the QuickTools project and its creator. Built to be fast, private and free.',
    });
  }
}
