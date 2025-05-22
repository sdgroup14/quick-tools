import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { marked } from 'marked';
import {DomSanitizer, Meta, SafeHtml, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-markdown',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './markdown.component.html',
})
// @ts-ignore
export class MarkdownComponent implements OnInit {
  markdown: string = `# Пример\n\n- Пиши markdown слева\n- Смотри результат справа`;
  rendered: SafeHtml;
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    this.title.setTitle('Markdown Editor & Preview — QuickTools');
    this.meta.updateTag({
      name: 'description',
      content: 'Live Markdown preview tool. Write and render Markdown instantly in your browser.',
    });
  }

  constructor(private sanitizer: DomSanitizer) {
    this.rendered = '';
    this.update(); // отрендерим при загрузке
  }

  async update(): Promise<void> {
    const parsed = await marked.parse(this.markdown);
    this.rendered = this.sanitizer.bypassSecurityTrustHtml(parsed);
  }
}
