import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-base64',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './base64.component.html',
})
export class Base64Component implements OnInit{
  input: string = '';
  output: string = '';
  mode: 'encode' | 'decode' = 'encode';
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Base64 Encoder & Decoder — QuickTools');
    this.meta.updateTag({
      name: 'description',
      content: 'Encode or decode Base64 text in your browser. Fast, secure, and 100% client-side.',
    });
  }

  convert(): void {
    try {
      if (this.mode === 'encode') {
        this.output = btoa(unescape(encodeURIComponent(this.input)));
      } else {
        this.output = decodeURIComponent(escape(atob(this.input)));
      }
    } catch (e: any) {
      this.output = '❌ Ошибка: ' + e.message;
    }
  }

  copy(): void {
    navigator?.clipboard.writeText(this.output);
  }

  clear(): void {
    this.input = '';
    this.output = '';
  }
}
