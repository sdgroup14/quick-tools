import {Component, inject, OnInit, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-password-generator',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './password-generator.component.html',
})
export class PasswordGeneratorComponent implements OnInit {
  length = 12;
  useLower = true;
  useUpper = true;
  useNumbers = true;
  useSymbols = false;

  password = signal('');
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Strong Password Generator — QuickTools');
    this.meta.updateTag({
      name: 'description',
      content: 'Generate secure and random passwords online. Customize password length and character types instantly.',
    });
  }

  generatePassword(): void {
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let validChars = '';

    if (this.useLower) validChars += lower;
    if (this.useUpper) validChars += upper;
    if (this.useNumbers) validChars += numbers;
    if (this.useSymbols) validChars += symbols;

    let generated = '';
    for (let i = 0; i < this.length; i++) {
      generated += validChars.charAt(Math.floor(Math.random() * validChars.length));
    }

    this.password.set(generated);
  }

  copyToClipboard(): void {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(this.password());
    }
  }
}
