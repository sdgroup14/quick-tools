import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RouterLink} from "@angular/router";
import {Meta, Title} from "@angular/platform-browser";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-blog-list',
  imports: [
    RouterLink,
    NgForOf,
  ],
  templateUrl: './blog-list.component.html',
  standalone: true,
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent implements OnInit{
  posts: any[] = [];
  private title = inject(Title);
  private meta  = inject(Meta);
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get<any[]>('/blog/posts.json').subscribe(data => this.posts = data);
    this.title.setTitle(`Blog — QuickTools`);
    // Устанавливаем meta description из поля description
    this.meta.updateTag({
      name: 'description',
      content: 'Blog — QuickTools Articles and News'
    });
  }
}
