import {Component, inject, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  template: `
      <div class="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow space-y-4">
          <h1 class="text-2xl font-bold">Privacy Policy</h1>
          <p>This website (QuickTools) respects your privacy and does not collect any personal data directly.</p>
          <p>
              Third-party services such as Google AdSense may use cookies to serve ads based on your prior visits to
              this or other websites.
              Learn more: <a href="https://policies.google.com/technologies/ads" class="text-blue-600 underline">Google
              Privacy & Terms</a>
          </p>
          <p>
              We do not store your input or generated data. All tools run entirely in your browser.
          </p>
          <p>
              If you have any questions, feel free to contact us at: <a href="mailto:contact&#64;quicktools.tools" class="text-blue-600 underline">contact&#64;quicktools.tools</a>

          </p>
      </div>
  `
})
export class PrivacyPolicyComponent implements OnInit {
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Privacy Policy — QuickTools');
    this.meta.updateTag({
      name: 'description',
      content: 'QuickTools does not collect personal data. Read our privacy policy for details.',
    });
  }
}
