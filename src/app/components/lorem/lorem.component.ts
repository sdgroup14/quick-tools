import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-lorem',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lorem.component.html',
})
export class LoremComponent implements OnInit {
  paragraphs = 3;
  output = '';

  private loremText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Lorem Ipsum Text Generator — QuickTools');
    this.meta.updateTag({
      name: 'description',
      content: 'Generate placeholder Lorem Ipsum text for design and development. Choose number of paragraphs and copy with one click.',
    });
  }

  generate(): void {
    this.output = Array(this.paragraphs).fill(this.loremText).join('\n\n');
  }

  copy(): void {
    navigator?.clipboard.writeText(this.output);
  }

  clear(): void {
    this.output = '';
  }
}
