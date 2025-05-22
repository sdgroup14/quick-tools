import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-utm-generator',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './utm-generator.component.html',
  styleUrl: './utm-generator.component.scss'
})
export class UtmGeneratorComponent implements OnInit{
  private fb = inject(FormBuilder);
  form: FormGroup = this.fb.group({
    baseUrl: ['', Validators.required],
    utm_source: [''],
    utm_medium: [''],
    utm_campaign: [''],
    utm_term: [''],
    utm_content: [''],
  });

  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('UTM URL Generator — QuickTools');
    this.meta.updateTag({
      name: 'description',
      content: 'Free online UTM link builder with fast preview and copy feature.',
    });
  }

  generatedUrl: string = '';

  generateUrl(): void {
    const { baseUrl, ...params } = this.form.value;
    const query = Object.entries(params)
        .filter(([_, v]) => v)
        .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v as string)}`)
        .join('&');

    this.generatedUrl = baseUrl + (baseUrl.includes('?') ? '&' : '?') + query;
  }

  copyToClipboard(): void {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(this.generatedUrl);
    }
  }
}
