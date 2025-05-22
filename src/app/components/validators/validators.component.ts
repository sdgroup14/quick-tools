import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-validators',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './validators.component.html',
})
export class ValidatorsComponent implements OnInit {
  email: string = '';
  url: string = '';
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Email & URL Validator — QuickTools');
    this.meta.updateTag({
      name: 'description',
      content: 'Quickly validate emails and URLs online. Free validation tool with instant results.',
    });
  }

  get isEmailValid(): boolean | null {
    if (!this.email) return null;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
  }

  get isUrlValid(): boolean | null {
    if (!this.url) return null;
    try {
      new URL(this.url);
      return true;
    } catch {
      return false;
    }
  }

  clear(): void {
    this.email = '';
    this.url = '';
  }
}
