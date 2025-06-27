import {Component, inject, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-blog-post',
  imports: [],
  templateUrl: './blog-post.component.html',
  standalone: true,
  styleUrl: './blog-post.component.scss'
})
export class BlogPostComponent implements OnInit {
  post: any;
  private title = inject(Title);
  private meta  = inject(Meta);
  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  ngOnInit() {
    const slug = this.route.snapshot.params['slug'];
    this.http.get<any[]>('/blog/posts.json').subscribe(posts => {
      this.post = posts.find(p => p.slug === slug);
      if (this.post) {
        this.title.setTitle(this.post.title + ' — QuickTools');
        this.meta.updateTag({ name:'description', content: this.post.content.slice(0,150) });
      }
    });
  }
}
